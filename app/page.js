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

const page = () => {
  return (
    <div>
      <FeatureFlow/>
      <BrowseBySpecialty/>
      <CareSection/>
      <TopDoctorsSection/>
      <TopHospitalsSection/>
      <PartnerHospitalsSection/>
      <PromotionalSection/>
      <CustomerReviewSection/>
      <NeedySupportSection/>
    </div>
  );
};

export default page;