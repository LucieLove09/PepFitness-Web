import ActionButton from "../navbar/shared/ActionButton";
import HText from "../../../src/scenes/navbar/shared/HText";
import { BenefitType, SelectedPage } from "../navbar/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import TrainerPortrait from "../../assets/TrainerPortrait.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Videos",
    description:
      "Each video is led by expert coaches, providing step-by-step instructions and key technique cues to ensure you perform every movement safely and effectively.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Fitness Community You Can Count On",
    description:
      "Our fitness community is a space where like-minded individuals come together to stay motivated, share progress, and get expert guidance.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Take your training to the next level with our team of expert coaches. Whether you’re looking for personalized programming, technique refinement, or accountability, our trainers are here to guide you.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST AN APP.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness videos, trainers and community to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={TrainerPortrait}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    LEARN MORE ABOUT OUR MAIN COACH{" "}
                    <span className="text-primary-500">PEP</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
              Pep is the founder and coach of Performance Enhancement Project LLC. 
              As a personal trainer, coach, and athlete, his goal is to enhance people's 
              physical capabilities and performance, helping them achieve more than they 
              ever thought possible. With certifications from NASM CPT, Pre-script Level 
              1 Coach, Pre-script Skill Acquisition, Pre-script Barbell, Pre-script 
              Nutrition, and the Altis Foundations course, Pep brings a wealth of knowledge 
              and expertise. With 4 years of personal training experience and 7 years of 
              training himself, Pep is dedicated to guiding clients to their peak potential 
              with passion and insight.
              </p>
              <p className="mb-5">
              His Philisophy: At Performance Enhancement Project LLC, I emphasize skill acquisition as the 
              cornerstone of effective personal training. By focusing on developing specific 
              fitness skills, I ensure that each client not only meets their immediate goals 
              but also gains lasting knowledge and abilities. This approach promotes sustainable 
              progress, boosts confidence, and enhances overall well-being. Your journey to 
              mastery and health is my top priority.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;