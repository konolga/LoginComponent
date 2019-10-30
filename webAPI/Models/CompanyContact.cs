namespace webAPI.Models
{
    public class CompanyContact
    {
        public int Id { get; set; }
        public int CompanyId { get; set; }
        public string Name { get; set; }
        public string Position { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string AdditionalPhone { get; set; }       
        public string Fax { get; set; }
        public string MobilePhone { get; set; }
        public string Status { get; set; }       
        public string Description { get; set; }
   
    }
}