import Card from "./components/Card";
import CardPicture from "./components/CardPicture";
import CardDescription from "./components/CardDescription";
import CardFooter from "./components/CardFooter";
import CardTitle from "./components/CardTitle";
import Footer from "./ui/Footer";

const cardContent = {
  title:
    "Shift the overall look and feel by adding these wonderful touches to furniture in your home",
  description:
    "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.",
  user: "Michelle Appleton",
  date: "28 Jun 2020",
  img: "drawers",
  profile: "michelle",
};

function App() {
  return (
    <div className="bg-(--gray-light) min-h-[100vh] flex flex-col">
      <Card>
        <CardPicture img={cardContent.img} />
        <section className="p-6 flex flex-col gap-4">
          <CardTitle>{cardContent.title}</CardTitle>
          <CardDescription>{cardContent.description}</CardDescription>
        </section>
        <CardFooter
          img={cardContent.profile}
          username={cardContent.user}
          date={cardContent.date}
        />
      </Card>
      <Footer />
    </div>
  );
}

export default App;
/*
     Michelle Appleton 28 Jun 2020
    Share */
