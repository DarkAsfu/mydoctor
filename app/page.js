import { FeatureFlow } from '@/components/feature-flow';
import { BrowseBySpecialty } from '@/components/browse-by-specialty';
import { CareSection } from '@/components/care-section';
import { PromotionalSection } from '@/components/promotional-section';
import { TopDoctorsSection } from '@/components/top-doctors-section';
import { TopHospitalsSection } from '@/components/top-hospitals-section';
import { PartnerHospitalsSection } from '@/components/partner-hospitals-section';
import { CustomerReviewSection } from '@/components/customer-review-section';
import { NeedySupportSection } from '@/components/needy-support-section';
import React from 'react';
import GyneFertilityCareBox from '@/components/gyne-fertility-care-box';
import { TreatmentPackagesSection } from '@/components/treatment-packages-section';
import { OrderMedicineSection } from '@/components/order-medicine-section';
import { InternationalTreatmentTravelSection } from '@/components/international-treatment-travel-section';
import { EventsSection } from '@/components/events-section';
import { PublicationsSection } from '@/components/publications-section';
import { AssociationSection } from '@/components/association-section';
import { HeroBanner } from '@/components/hero-banner';

const page = () => {
  return (
    <div>
      <HeroBanner/>
      <FeatureFlow/>
      <GyneFertilityCareBox/>
      {/* <BrowseBySpecialty/> */}
      {/* <CareSection/> */}
      <TopDoctorsSection/>
      <TreatmentPackagesSection/>
      <OrderMedicineSection/>
      <InternationalTreatmentTravelSection/>
      <CustomerReviewSection/>
      <EventsSection/>
      <PartnerHospitalsSection/>
      <PublicationsSection/>
      <AssociationSection/>
      {/* <TopHospitalsSection/> */}
      <PromotionalSection/>
      {/* <NeedySupportSection/> */}
    </div>
  );
};

export default page;