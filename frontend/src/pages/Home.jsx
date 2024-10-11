import React from "react";
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row } from 'react-bootstrap';

const designs = [
    { name: 'Family House', count: 122, icon: '🏠', color: 'danger' },
    { name: 'House & Villa', count: 155, icon: '🏡', color: 'success' },
    { name: 'Apartment', count: 300, icon: '🏢', color: 'warning' },
    { name: 'Office & Studio', count: 80, icon: '🏬', color: 'primary' },
    { name: 'Villa & Condo', count: 80, icon: '🏛️', color: 'info' }
];

const properties = [
{
    id: 1,
    name: "Luxurious Bungalow",
    price: "3.8 crores",
    description: "Located at Bandra Market, Mumbai",
    imageUrl: "https://s3-ap-southeast-1.amazonaws.com/atap-main/gallery-full/437efd2d-368c-4b6a-bef4-988e57604a4b/3-storey-bungalow-house-start-from-empty-land.jpg",
},
{
    id: 2,
    name: "Classic House",
    price: "2.11 crores",
    description: "Located at Srinagar, Kashmir",
    imageUrl: "https://static.vecteezy.com/system/resources/previews/023/309/303/non_2x/ai-generative-exterior-of-modern-luxury-house-with-garden-and-beautiful-sky-photo.jpg",
},
{
    id: 3,
    name: "Smart Paradise",
    price: "4.91 crores",
    description: "Located at Sector 28, Gandhinagar",
    imageUrl: "https://t3.ftcdn.net/jpg/02/33/59/42/360_F_233594258_81s2Un5DEpmiHYxuOPAUfnrD0T9we5fd.jpg",
},
{
    id: 4,
    name: "Estate Luxury",
    price: "3.11 crores",
    description: "Located in South Delhi",
    imageUrl: "https://i.pinimg.com/originals/7e/e2/56/7ee2569fb6fe306ecaad1d18c78ea362.jpg",
},
{
    id: 5,
    name: "Home of Luxury",
    price: "2.83 crores",
    description: "Located in Bangalore",
    imageUrl: "https://cdn.buildofy.com/projects/4a038d60-e66a-4937-8d2b-beaed3dbb6a6.jpeg",
},
];

const locations = [
{
    name: "Mumbai, India",
    villas: 14,
    offices: 7,
    apartments: 10,
    imageUrl: "https://previews.123rf.com/images/vladacanon9/vladacanon91709/vladacanon9170900051/86874323-panoramic-view-of-modern-buildings-in-oslo-norway.jpg",
},
{
    name: "Washington , United States",
    villas: 8,
    offices: 7,
    apartments: 4,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOwb7BxQ-jvJFI7TJfCYCq0uNXf5FZk4nwg&s",
},
{
    name: "New York, United States",
    villas: 21,
    offices: 4,
    apartments: 7,
    imageUrl: "https://media.istockphoto.com/id/1759534028/photo/fort-lauderdale-beachfront-property-florida-usa.jpg?s=612x612&w=0&k=20&c=8JLE08o806oa_Il-QM1Bfw1g0IgBwhc3zVn6r9_shJI=",
},
{
    name: "Montreal, Canada",
    villas: 17,
    offices: 7,
    apartments: 6,
    imageUrl: "https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1194i215%2Fqakzk8sfnyq2m9avdefra4jv33i215&option=N&h=472&permitphotoenlargement=false",
    },
    {
    name: "Dubai, UAE",
    villas: 12,
    offices: 7,
    apartments: 10,
    imageUrl: "https://www.contemporist.com/wp-content/uploads/2020/01/modern-house-design-architecture-280120-1115-01.jpg",
    },
    {
    name: "Tokyo, Japan",
    villas: 17,
    offices: 7,
    apartments: 12,
    imageUrl: "https://i.ytimg.com/vi/gGzGT5pqq0k/maxresdefault.jpg",
    },
    {
    name: "Basel, Switzerland",
    villas: 12,
    offices: 9 ,
    apartments: 10,
    imageUrl: "https://www.thepinnaclelist.com/wp-content/uploads/2016/12/01-Feldbalz-House-Luxury-Residence-Zurichsee-Zurich-Switzerland.jpg   ",
    },
    {
        name: "Liverpool, London",
        villas: 18,
        offices: 3,
        apartments: 7,
        imageUrl: "https://i.pinimg.com/originals/74/8a/c8/748ac84ed917fbd8db6a849a2387141f.jpg",
    },
];

const Home = () => {
    return (
    <div>
        <div className="property-list-container">
        <h2 className="section-title">Best Choices</h2>
        <h3 className="section-subtitle">Popular Residencies</h3>
        <div className="property-list">
        {properties.map((property) => (
            <div className="property-card" key={property.id}>
                <img src={property.imageUrl} alt={property.name} className="property-image" />
                <div className="property-info">
                <p className="property-price">{property.price}</p>
                <h4 className="property-name">{property.name}</h4>
                <p className="property-description">{property.description}</p>
            </div>
            </div>
        ))}
        </div>
    
    </div>

        <div className="explore-by-location">
        <h2 className="section-title">Explore By Location</h2>
        <h3 className="section-subtitle">Popular Countries</h3>

        <div className="location-grid">
        {locations.map((location, index) => (
            <div className="location-card" key={index}>
            <img src={location.imageUrl} alt={location.name} />
            <div className="location-info">
                <h3>{location.name}</h3>
                <p>
                    {location.villas} Villas &nbsp;&nbsp; {location.offices} Offices &nbsp;&nbsp;
                    {location.apartments} Apartments
                </p>
            </div>
            </div>
        ))}
        </div>
            <br></br>
            <br></br>
        
        <h2 className="section-title">Featured Property Types</h2>
        <h5 className="section-subtitle">Find All Types of Properties</h5>

        <div>
  <Row className="justify-content-center">
    {designs.map((property, index) => (
      <Col key={index} sm={12} md={4} lg={2} className="mb-4">
        <Card className="text-center shadow-sm border-0 card-hover">
          <Card.Body className="card-body">
            <div className={`text-${property.color} card-icon`}>
              {property.icon}
            </div>
            <Card.Title className="card-title">{property.name}</Card.Title>
            <Card.Text className="card-text">{property.count} Property</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</div>
</div>
    <br></br>



        <footer aria-label="Site Footer" className=" bg-gray-200 font-medium rounded-t-3xl">
                <div
                    className="max-w-screen-xl px-4 py-8 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:p-12 ">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
                        <div> 
                            <p className='text-5xl custom-text'>PropertyPulse</p>
                            {/* <img src={CareerHub} alt="" srcset="" /> */}
                            <p className="max-w-xs mt-4 text-gray-500 text-start">
                                There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.
                            </p>

                            <ul className="flex gap-6 mt-8 justify-center md:justify-start">
                                <li>
                                    <a
                                        href="/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-gray-700 transition hover:opacity-80"
                                    >
                                        <span className="sr-only">Facebook</span>

                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-gray-700 transition hover:opacity-75"
                                    >
                                        <span className="sr-only">Instagram</span>

                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-gray-700 transition hover:opacity-75"
                                    >
                                        <span className="sr-only">Twitter</span>

                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                            />
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-gray-700 transition hover:opacity-75"
                                    >
                                        <span className="sr-only">Dribbble</span>

                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div
                            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4"
                        >
                            <div>
                                <p className="font-medium text-gray-900">Services</p>
                                <nav aria-label="Footer Navigation - Services" className="mt-6 ">
                                    <ul className="space-y-4 text-sm ">
                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                Company Review
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                Accounts Review
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                HR Consulting
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                SEO Optimisation
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div>
                                <p className="font-medium text-gray-900">Company</p>

                                <nav aria-label="Footer Navigation - Company" className="mt-6">
                                    <ul className="space-y-4 text-sm">
                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                About
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                Meet the Team
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                Accounts Review
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div>
                                <p className="font-medium text-gray-900">Helpful Links</p>

                                <nav aria-label="Footer Navigation - Company" className="mt-6">
                                    <ul className="space-y-4 text-sm">
                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                Contact
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                FAQs
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                Live Chat
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div>
                                <p className="font-medium text-gray-900">Legal</p>

                                <nav aria-label="Footer Navigation - Legal" className="mt-6">
                                    <ul className="space-y-4 text-sm">
                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                Accessibility
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                Returns Policy
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                Refund Policy
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                Hiring Statistics
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <p className="font-bold text-gray-500 text-center bg-gradient-to-r from-indigo-500 to-indigo-800 bg-clip-text text-transparent italic">
                        &copy; 2024. PropertyPulse. All rights reserved.
                    </p>
                </div>
            </footer>

    </div>
    );
};

export default Home;

