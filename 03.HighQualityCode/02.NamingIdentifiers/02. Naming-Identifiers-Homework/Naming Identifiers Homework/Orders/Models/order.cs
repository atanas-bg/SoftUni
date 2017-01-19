namespace Orders.Models
{
    public class Order
    {
        public int OrderId { get; set; }

        public int ProductId { get; set; }

        public int ProductQuantity { get; set; }

        public decimal PriceDiscount { get; set; }
    }
}
