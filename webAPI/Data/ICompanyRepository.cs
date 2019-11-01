using webAPI.Models;
using System.Threading.Tasks;
using System.Collections.Generic;


namespace webAPI.Data
{
    public interface ICompanyRepository
    {
        Task <Company> Create (Company company);
        Task <bool> CompanyExists (string username);
        Task <IEnumerable<Company>> GetCompanies ();
    }
}