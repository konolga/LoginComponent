using Microsoft.EntityFrameworkCore;
using webAPI.Models;

namespace webAPI.Models
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){ }

        public DbSet<User> Users { get; set; }
    }
}