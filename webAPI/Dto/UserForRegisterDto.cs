namespace webAPI.Dto
{
    public class UserForRegisterDto
    {
        [Required]
        [StringLength(50, MinimumLength=4, ErrorMessage="Username must be between 4 and 50 characters")]
        public string Username { get; set; }
         public string Identifier { get; set; }
         [Required]
         [StringLength(50, MinimumLength=4, ErrorMessage="Address must be between 4 and 50 characters")]
         public string Address { get; set; }
         [Required]
         [StringLength(25, MinimumLength=4, ErrorMessage="City must be between 4 and 25 characters")]
         public string City { get; set; }
         [StringLength(25, MinimumLength=4, ErrorMessage="Url must be between 4 and 25 characters")]
         public string Url { get; set; }
         [StringLength(50, MinimumLength=4, ErrorMessage="Email must be between 4 and 50 characters")]
         public string Email { get; set; }
         [Required]
         [StringLength(25, MinimumLength=4, ErrorMessage="Phone must be between 4 and 25 characters")]
         public string Phone { get; set; }
         [Required]
         [StringLength(25, MinimumLength=4, ErrorMessage="Phone must be between 4 and 25 characters")]
         public string AdditionalPhone { get; set; }
         [Required]
         [StringLength(25, MinimumLength=4, ErrorMessage="Fax must be between 4 and 25 characters")]
         public string Fax { get; set; }
        public string MainBusiness { get; set; }
        public string SecondaryBusiness { get; set; }
        public string Status { get; set; }
        public string Description { get; set; }
        [Required]
        [StringLength(8, MinimumLength=4, ErrorMessage="Password must be between 4 and 8 characters")]
        public string Password { get; set; }
    }
}