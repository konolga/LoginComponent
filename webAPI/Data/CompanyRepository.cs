using webAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;

namespace webAPI.Data
{
    public class CompanyRepository : ICompanyRepository
    {
        private readonly DataContext _context;
        public CompanyRepository(DataContext context)
        {
            _context = context;
        }

         public async Task<Company> Create(Company company)
        {
            await _context.Companies.AddAsync(company);
            await _context.SaveChangesAsync();
            return company;
        }

         public async Task<bool> CompanyExists(string username)
        {
           if (await _context.Companies.AnyAsync(x => x.Username == username))
           return true;
           return false;
        }

        public async Task<IEnumerable<Company>> GetCompanies()
        {
            var companies = await _context.Companies.ToListAsync();
            return companies;
        }
    }
}