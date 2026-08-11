import NavigationCards from "../components/NavigationCards";
import servicesData from "../../public/service_description/services.json";
export default function Services() {
  const headerInfo = {
    title: "What we do",
    second_title: "We make it certain",
    text: "Inspired by a commitment to continuous improvement, our services are delivered collaboratively to maximize value and ensure certainty of outcome. We leverage our experience to realize results that exceed our clients’ expectations.",
    image: "/What_we_do.jpg",
  };

  const galleryInfo = servicesData.services.map((service) => ({
    id: service.id,
    title: service.title,
    text: Array.isArray(service.intro_text)
      ? service.intro_text[0]
      : service.intro_text,
    images: service.images,
    link: `/services/${service.id}`,
  }));
  return (
    <>
      <NavigationCards items={galleryInfo} />
    </>
  );
}

//      <PageHeader props={headerInfo} />
