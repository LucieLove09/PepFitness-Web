import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-600 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Paragraph.
          </p>
          <p>© PEP LLC All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Connect With Us</h4>
          <p className="my-5">links</p>
          <p className="my-5">In-person personal training sessions are held at The Gym Mesa</p>
          <p>1126 South Gilbert Road, Mesa, Arizona 85204, United States</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Email: coach@pepscoaching.com</p>
          <p>Phone: (908)878-6131</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;