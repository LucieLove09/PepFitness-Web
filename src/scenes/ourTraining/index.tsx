import { SelectedPage, ClassType } from "../navbar/shared/types";
import image1 from "@/assets/image1.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import image7 from "@/assets/Image7.png"; 
import { motion } from "framer-motion";
import HText from "../navbar/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Exercise Videos",
    description:
      "Unlock a comprehensive library of guided exercise videos designed to help you train with confidence.",
    image: image1,
  },
  {
    name: "Side by Side Coaching",
    image: image7,
  },
  {
    name: "Individual Workout Plans",
    description:
      "Description.",
    image: image3,
  },
  {
    name: "Keep Track Of Your Progress",
    description:
      "Description.",
    image: image4,
  },
  {
    name: "Nutrition Advise",
    image: image5,
  },
  {
    name: "Fitness Community",
    description:
      "Description.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurTraining = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourtraining" className="w-full bg-gray-600 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurTraining)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR TRAINING AND APPLICATION</HText>
            <p className="py-5">
            Restore Function. Enhance Performance. Increase Strength. Discover a new level of performance.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurTraining;