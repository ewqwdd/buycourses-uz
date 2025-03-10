import { memo } from 'react';
import { Title } from '../ui/Title';

export default memo(function RefundReturnPolicy() {
  return (
    <div className="pb-48 max-w-[1440px] px-10 mx-auto py-8 text-secondary [&_h2]:text-primary [&_h1]:text-primary [&_h3]:text-primary [&_a]:text-accentSecondary">
      <Title title={'Refund and Return Policy'} />
      <h1 className="text-3xl font-bold text-center mb-8">Refund and Return Policy</h1>
      <p className="text-right text-sm text-tertiary">Last update: 13/01/2024</p>

      <section className="mt-6">
        <p>
          Thank you for shopping at CHULIBAN HOTEL, your go-to destination for the finest everyday products. We stand behind
          the quality of our products and want every purchase to be a positive experience. Below, we outline the conditions
          under which we accept returns and issue refunds.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Return Period</h2>
        <p>30-Day Return Policy: You can return most items purchased from CHULIBAN HOTEL within 30 days of the delivery date.</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Conditions for Returns</h2>
        <ul className="pl-6 list-disc">
          <li>Items must be in their original condition, unused, and with all original packaging, accessories, and manuals.</li>
          <li>Used, altered, or damaged items will not be accepted.</li>
          <li>A valid receipt or order confirmation number is required for all returns and exchanges.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Non-Returnable Items</h2>
        <ul className="pl-6 list-disc">
          <li>Special order or custom-made products.</li>
          <li>Clearance items marked as “Final Sale.”</li>
          <li>Products that have been installed or used.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Process for Returns</h2>
        <ul className="pl-6 list-decimal">
          <li>
            <strong>Contact Customer Service:</strong> Before returning an item, contact our customer service at 9862306075
            to initiate the return process. We will provide a Return Merchandise Authorization (RMA) number and instructions.
          </li>
          <li>
            <strong>Packaging Your Return:</strong> Carefully pack the item in its original packaging, including all accessories.
            Write the RMA number clearly on the package.
          </li>
          <li>
            <strong>Shipping:</strong> Return the package to the address provided by our team. We recommend a trackable
            shipping method as we are not responsible for lost or damaged shipments.
          </li>
          <li>
            <strong>Refund Processing:</strong> Once we receive and inspect the returned item, refunds will be processed to
            the original payment method within 7 business days. Shipping and handling fees are non-refundable.
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Exchanges</h2>
        <p>
          If you received a defective or incorrect item, please contact us within 3 days of receiving your order to arrange
          an exchange.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Damaged or Defective Items</h2>
        <p>
          If you receive a damaged or defective item, contact us immediately. We will ensure a replacement is sent and
          cover any return shipping costs.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Customer Service Contact Information</h2>
        <ul className="pl-6 list-disc">
          <li>Email: <a href="mailto:ainulmahammad14@gmail.com">ainulmahammad14@gmail.com</a></li>
          <li>Phone: 9862306075</li>
        </ul>
      </section>

      <section className="mt-8">
        <p>
          We value your business and are here to ensure your satisfaction with every purchase from CHULIBAN HOTEL.
        </p>
      </section>
    </div>
  );
});