using System.Threading.Tasks;
using webAPI.Models;

namespace webAPI.Data
{
    public interface IAuthRepository
    {
        Task <User> Register (User user, string password);
        Task <User> Login (string username, string Identifier, string password);
         Task <bool> UserExists (string username);   
    }
}