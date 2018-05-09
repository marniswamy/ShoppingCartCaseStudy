
export const getAmountAfterDiscount = (amount, coupon) => {
   if(!coupon && amount > 0 && amount < 50) {
       return amount - 5;
   }
   if(!coupon && amount > 50) {
       return amount - 10
   }
   if(coupon && amount > 75) {
       console.log('coupon && amount > 75', coupon && amount > 75)
       return amount - 15;
   }
   return amount;
}