import customer1Image from './assets/customer1.jpg';
import customer2Image from './assets/customer2.jpg';
import customer3Image from './assets/customer3.jpg';
import customer4Image from './assets/customer4.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Maria Sanchez',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `"Thank you for dinner last night. It was amazing!! I have to say it’s the best meal I have had in quite some time.
     You will definitely be seeing more of me eating at your establishment".`,
  },
  {
    fullName: 'Antony Clifton',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `WOW!!! What an outstanding dinner you prepared at Little Lemon on Friday evening!!! 
    It was an honor for me to be invited and experience firsthand your incredible culinary gift!.`,
  },
  {
    fullName: 'Tamika Jackson',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Thanks again this year for having our wedding anniversary at your fine restaurant last Monday evening. 
    The food, service, ambience were all superb!!! On behalf of us all, fight on!.`,
  },
  {
    fullName: 'Brandon Ming',
    image: customer4Image,
    rating: [1, 1, 1, 1],
      says: `"Everyone had a wonderful time at The French Gourmet last night. As expected,
      the food was delicious and our servers,even thought a bit slow, were so friendly and helpful",.`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => 
          <TestimonialCard key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Testimonials;
