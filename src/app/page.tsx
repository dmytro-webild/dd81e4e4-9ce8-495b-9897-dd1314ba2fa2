"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Award, CheckCircle, Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="small"
        sizing="mediumLarge"
        background="none"
        cardStyle="inset"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Cakes",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Bakes and Cakes"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Bakes and Cakes"
      description="Artisanal cakes handcrafted with love for every celebration."
      buttons={[
        {
          text: "View Menu",
          href: "#products",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-close-up-view-cake-kitchen-board-with-cake-with-black-grapes-powdered-sugar_140725-71519.jpg",
          imageAlt: "Fresh Cakes",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/serious-young-redhead-curly-lady-sitting-cafe_171337-16952.jpg",
          imageAlt: "Bakery Interior",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/mixed-healthy-dried-fruits-with-marble-background-high-quality-photo_114579-37906.jpg",
          imageAlt: "Cupcakes",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-women-working-kitchen_23-2150014869.jpg",
          imageAlt: "Baking",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-rainbow-cupcakes-still-life_23-2150154637.jpg",
          imageAlt: "Celebration",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-red-pastry-tarts-black-background_169016-18447.jpg",
          imageAlt: "Desserts",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Our Passion for Baking"
      description={[
        "Founded on a love for traditional techniques and premium ingredients, we bring joy to every occasion through our artisanal creations.",
        "Each cake is a unique masterpiece, carefully baked to order by our dedicated pastry chefs.",
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Chocolate Indulgence",
          price: "$45",
          variant: "Large",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-delicious-chocolate-cake-concept_23-2148769219.jpg",
        },
        {
          id: "2",
          name: "Berry Sponge",
          price: "$38",
          variant: "Medium",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-yummy-strawberry-cake-round-shaped-with-fruits-along-with-fresh-red-strawberries-blue-desk-cake-dough-sweet-biscuit-fruit-berry_140725-31150.jpg",
        },
        {
          id: "3",
          name: "Velvet Bliss",
          price: "$42",
          variant: "Large",
          imageSrc: "http://img.b2bpic.net/free-photo/set-cake-portions-velvet-strawberry-cake-marble_123827-23963.jpg",
        },
        {
          id: "4",
          name: "Lemon Zest Tart",
          price: "$30",
          variant: "Small",
          imageSrc: "http://img.b2bpic.net/free-photo/lime-cheesecake-garnished-with-lime-slices-blackberry-black-currant-pistachios_140725-1391.jpg",
        },
        {
          id: "5",
          name: "Classic Vanilla",
          price: "$35",
          variant: "Medium",
          imageSrc: "http://img.b2bpic.net/free-photo/coconut-cake-plate_1339-6847.jpg",
        },
        {
          id: "6",
          name: "Grand Wedding",
          price: "$120",
          variant: "Special",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-elegant-cake-topper_23-2149232371.jpg",
        },
      ]}
      title="Signature Collection"
      description="Handcrafted delights for every sweet craving."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          icon: CheckCircle,
          title: "Fresh Ingredients",
          description: "Always locally sourced and high quality.",
        },
        {
          icon: Shield,
          title: "Handcrafted",
          description: "Baked from scratch in small batches.",
        },
        {
          icon: Award,
          title: "Custom Designs",
          description: "Tailored to your perfect celebration.",
        },
      ]}
      title="Why Choose Us"
      description="The difference is in the details."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Our Impact"
      tag="Trusted Quality"
      metrics={[
        {
          id: "m1",
          value: "5000+",
          description: "Cakes Baked",
        },
        {
          id: "m2",
          value: "800+",
          description: "Happy Weddings",
        },
        {
          id: "m3",
          value: "25 ",
          description: "Years of Experience",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah",
          role: "Client",
          company: "Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-parents-holding-plate-with-muffins_23-2148414888.jpg",
        },
        {
          id: "2",
          name: "Mark",
          role: "Event Planner",
          company: "Events",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-looking-happy-gesturing-victory-peace_1194-406930.jpg",
        },
        {
          id: "3",
          name: "Elena",
          role: "Mom",
          company: "Birthday",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-man-with-cupcake_23-2149305103.jpg",
        },
        {
          id: "4",
          name: "David",
          role: "Bride",
          company: "Wedding",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-male-courier-blue-uniform-cape-holding-little-delivery-food-package-light-pink-wall_140725-46137.jpg",
        },
        {
          id: "5",
          name: "Julia",
          role: "Fan",
          company: "Cafe",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-girl-with-doughnuts-red-background_23-2148299480.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "4.9",
          label: "Rating",
        },
        {
          value: "100%",
          label: "Satisfaction",
        },
        {
          value: "95%",
          label: "Reorders",
        },
      ]}
      title="Customer Loves"
      description="What our customers are saying about our delicious cakes."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      text="Ready to order your dream cake? Contact us today to start the conversation."
      buttons={[
        {
          text: "Contact Us",
          href: "mailto:hello@bakesandcakes.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Links",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Cakes",
              href: "#products",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Bakes and Cakes"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
