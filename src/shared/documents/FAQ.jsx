import { memo } from 'react';
import { Title } from '../ui/Title';

export default memo(function FAQ() {
  return (
    <div className="pb-48 max-w-[1440px] px-10 mx-auto py-8 text-secondary [&_h2]:text-primary [&_h1]:text-primary [&_h3]:text-primary [&_a]:text-accentSecondary">
      <Title title={'Frequently Asked Questions (FAQ)'} />
      <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions (FAQ)</h1>
      <p className="text-right text-sm text-tertiary">Last update: 13/01/2024</p>

      <section className="mt-6">
        <p>
          Welcome to the FAQ section of CHULIBAN HOTEL, where we aim to answer your most common questions regarding our products, ordering process, shipping, and more. If you can’t find the answer you’re looking for, please contact us for further assistance.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Warranty</h2>
        <h3 className="text-xl font-semibold mt-4">Are your products covered by a warranty?</h3>
        <p>
          Yes, all our products come with a manufacturer’s warranty. Warranty periods and specific coverage vary by product and manufacturer. Please check the product details page for warranty information.
        </p>
        <h3 className="text-xl font-semibold mt-4">Can I find product manuals or care instructions on your website?</h3>
        <p>
          Yes, digital copies of care instructions and user guides are available on the product detail pages. If you can’t find the information you’re looking for, please contact our customer service team.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Ordering</h2>
        <h3 className="text-xl font-semibold mt-4">How do I place an order?</h3>
        <p>
          Simply add items to your cart, proceed to checkout, and follow the prompts to complete your order. You’ll need to provide shipping and payment information before confirming your order.
        </p>
        <h3 className="text-xl font-semibold mt-4">Can I change or cancel my order after placing it?</h3>
        <p>
          If you need to change or cancel your order, please contact us as soon as possible. We’ll do our best to accommodate your request, but once an order is processed, changes may not be possible.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Payment</h2>
        <h3 className="text-xl font-semibold mt-4">What payment methods do you accept?</h3>
        <p>
          We accept various payment methods including major credit cards (Visa, MasterCard, American Express), PayPal, and other popular payment platforms. All transactions are securely processed.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Shipping</h2>
        <h3 className="text-xl font-semibold mt-4">How long will it take to receive my order?</h3>
        <p>
          Shipping times depend on the method selected at checkout. We offer standard, expedited, and express shipping options. Estimated delivery times are provided at checkout.
        </p>
        <h3 className="text-xl font-semibold mt-4">Do you offer international shipping?</h3>
        <p>
          Currently, we ship only within Pakistan. We’re working on expanding our shipping options in the future.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Returns and Exchanges</h2>
        <h3 className="text-xl font-semibold mt-4">What is your return policy?</h3>
        <p>
          We accept returns within 30 days of purchase for most items in new and unused condition. For more details, please visit our Return Policy page.
        </p>
        <h3 className="text-xl font-semibold mt-4">How do I return an item?</h3>
        <p>
          To initiate a return, please contact our customer service team to obtain a Return Merchandise Authorization (RMA) number and instructions on how to return your item.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Customer Service</h2>
        <h3 className="text-xl font-semibold mt-4">How can I contact customer service?</h3>
        <p>
          Our customer service team can be reached by phone at 9707808071, or through our website’s contact form. We’re here to help with any questions or concerns.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Feedback</h2>
        <h3 className="text-xl font-semibold mt-4">How can I leave feedback about a product or service?</h3>
        <p>
          We value your feedback! Please leave product reviews on our website or contact us directly with your feedback or suggestions.
        </p>
      </section>
    </div>
  );
});
