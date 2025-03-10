import { memo } from 'react';
import { Title } from '../ui/Title';

export default memo(function ShippingPolicy() {
  return (
    <div className="pb-48 max-w-[1440px] px-10 mx-auto py-8 text-secondary [&_h2]:text-primary [&_h1]:text-primary [&_h3]:text-primary [&_a]:text-accentSecondary">
      <Title title={'Shipping Policy'} />
      <h1 className="text-3xl font-bold text-center mb-8">Shipping Policy</h1>
      <p className="text-right text-sm text-tertiary">Last update: 13/01/2024</p>

      <section className="mt-6">
        <p>
          Welcome to CHULIBAN HOTEL! We’re dedicated to delivering the finest everyday products right to your door.
          Below you’ll find detailed information about our shipping practices, options, and policies to ensure a smooth
          and satisfying shopping experience.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Shipping Options and Delivery Times</h2>
        <ul className="pl-6 list-disc">
          <li>Standard Shipping: Estimated delivery within 3-7 business days.</li>
          <li>Expedited Shipping: Faster delivery within 1-3 business days for select items and locations.</li>
          <li>Free Shipping: We offer free standard shipping on orders over 50 Rs.</li>
        </ul>
        <p>
          Please note that shipping times are estimates and begin from the date of shipping rather than the date of order.
          Delivery times may vary due to factors beyond our control, such as weather conditions, postal delays, or holidays.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Shipping Costs</h2>
        <p>
          Shipping costs are calculated based on the weight, size, and destination of your order. You can view an estimated
          shipping cost at checkout before finalizing your purchase. For orders qualifying for free shipping, no shipping cost
          will be applied.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Order Processing Time</h2>
        <p>
          Orders are typically processed within 2 business days of order confirmation. Orders placed on weekends or holidays
          will be processed the next business day. We strive to dispatch your products as quickly as possible to ensure timely delivery.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">International Shipping</h2>
        <p>
          Currently, CHULIBAN HOTEL ships to Nepal. International shipping rates and delivery times vary based on destination.
          Please be aware that international orders may be subject to additional customs fees or import taxes upon arrival.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Tracking Your Order</h2>
        <p>
          Once your order is shipped, you will receive a confirmation email with a tracking number.
          You can use this number to track your shipment’s progress to your doorstep.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Shipping Carriers</h2>
        <p>
          We partner with reputable carriers to ensure your order arrives safely and on time.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Lost or Damaged Items</h2>
        <p>
          If your order arrives damaged or is lost in transit, please contact us immediately at 9862306075.
          We will work with you to resolve the issue, whether it be sending a replacement or issuing a refund.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>For any questions or concerns about your order’s shipping and delivery, please contact our customer service team:</p>
        <ul className="pl-6 list-disc">
          <li>Email: <a href="mailto:ainulmahammad14@gmail.com">ainulmahammad14@gmail.com</a></li>
          <li>Phone: 9862306075</li>
        </ul>
      </section>

      <section className="mt-8">
        <p>
          Thank you for choosing CHULIBAN HOTEL. We look forward to serving you and ensuring your satisfaction with every order.
        </p>
      </section>
    </div>
  );
});
