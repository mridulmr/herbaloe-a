import React from 'react';
import HeaderTop from '../common/header/HeaderTop';
import HeaderBottomTwo from '../common/header/HeaderBottomTwo';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import breadcrumbBg from '../assets/images/breadcrumb/1.jpg';
import Subscribe from '../components/subscribe/Subscribe';
import FooterTwo from '../common/footer/FooterTwo';
import QuoteWidget from '../components/widgets/QuoteWidget';
import ContactWidget from '../components/widgets/ContactWidget';
import FaqAccordion from '../components/accordion/AccordionOne';

const Faq = () => {
    return (
        <>
            <HeaderTop />
            <HeaderBottomTwo />
            <Breadcrumb breadcrumbBg={breadcrumbBg} heading="Help & FAQ" description="We are available for 24/7 for Garden & Landscaping Services" currentPage="FAQ" />
            <div class="faq-area pt-110 pb-110">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-8 col-lg-8 col-md-12">
                            <div className="faq">
                                <FaqAccordion
                                    preExpanded
                                    question="Design & Planing"
                                    answer="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                                />
                                <FaqAccordion
                                    question="Those who experiment the most, are able to innovate the best."
                                    answer="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                                />
                                <FaqAccordion
                                    question="Modern Equipment We Use and support from our experts."
                                    answer="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                                />
                                <FaqAccordion
                                    question="Understand Your Problem, You must understand the issue."
                                    answer="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                                />
                                <FaqAccordion
                                    question="How much and how often should I water my vegetables?"
                                    answer="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                                />
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-12 pr-50">
                            <ContactWidget />
                            <QuoteWidget />
                        </div>
                    </div>
                </div>
            </div>
            <Subscribe />
            <FooterTwo />
        </>
    )
}

export default Faq;