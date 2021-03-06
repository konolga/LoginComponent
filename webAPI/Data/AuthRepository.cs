using System.Threading.Tasks;
using webAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace webAPI.Data
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext _context;
        public AuthRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<User> Register(User user, string password)
        {
            byte [] passwordHash, passwordSalt;
            CreatePasswordHash (password, out passwordHash, out passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
        }

        public async Task<User> Login(string username, string identifier, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync( u => 
                                            u.Username == username 
                                            && u.Identifier == identifier);
                                        
            if (user == null)
            return null;

            if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
            return null;

            return user;
        }

        public async Task<bool> UserExists(string username, string identifier)
        {
           if (await _context.Users.AnyAsync(x => x.Username == username
                                                    &&x.Identifier == identifier))
           return true;
           return false;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
           using(var hmac = new System.Security.Cryptography.HMACSHA512())
           {
               passwordSalt = hmac.Key;
               passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));           
            }
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
           {
               var computeHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));           
                for (int i = 0; i < computeHash.Length; i++)
            {
                if (computeHash[i] != passwordHash[i])
                return false;
            }
            }
            return true;
        }

    }
}