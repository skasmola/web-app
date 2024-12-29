import React from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

export default function SustainabilityPolicy() {
    return (
        <div className="box-border">
            <section className="flex justify-center p-24 bg-[#265B9D] mb-24">
                <h2 className="text-white text-4xl font-bold">Sustainability Policy</h2>
            </section>
            <section className="w-3/4 mx-auto mb-12">
                <p className="text-xl font-extralight text-justify leading-relaxed">Innosoft remains steadfastly committed to its endeavor to lead by example in sustainability and continues to reduce its environmental footprint by focusing on three key areas: our facilities, our employees, and our travel. As an innovative digital transformation-based company, we already have a relatively low environmental impact. Innosoft aims to find the most sustainable ways to drive innovation, conserve resources, and contribute to the goal of addressing climate change when providing goods and services to our customers. Innosoft annually reports on corporate metrics and our progress towards improving our company’s economic, environmental, and social impacts.</p>
            </section>
            <section className="flex flex-col w-3/4 mx-auto gap-5 mb-12">
                <h2 className="text-2xl font-semibold">1. FACILITIES:</h2>
                <ol className="flex gap-5 flex-col">
                    <div className="flex flex-row">
                        <KeyboardArrowRightIcon fontSize="large" sx={{ color : "#000000" }}/>
                        <li className="text-xl font-extralight">Innosoft promotes green initiatives across the company. When selecting office space, we purposefully choose property management companies that value environmental consciousness.</li>
                    </div>
                    <div className="flex flex-row">
                        <KeyboardArrowRightIcon fontSize="large" sx={{ color : "#000000" }}/>
                        <li className="text-xl font-extralight">Innosoft enables employees to telework, allowing us to lower our carbon footprint. Employees additionally rely on virtual meeting software solutions instead of traveling.</li>
                    </div>
                    <div className="flex flex-row">
                        <KeyboardArrowRightIcon fontSize="large" sx={{ color : "#000000" }}/>
                        <li className="text-xl font-extralight">Innosoft recycles at all of its facilities, uses responsibly sourced paper products approved by the Forest Stewardship Council and Sustainable Forestry Initiative, and participates in printer toner recycling programs. We also encourage reusing electronics, procuring energy efficient electronics and appliances, and many more similar efforts.</li>
                    </div>
                </ol>
            </section>
            <section className="flex flex-col w-3/4 mx-auto gap-5 mb-12">
                <h2 className="text-2xl font-semibold">2. EMPLOYEES:</h2>
                <ol className="flex gap-5 flex-col">
                    <div className="flex flex-row">
                        <KeyboardArrowRightIcon fontSize="large" sx={{ color : "#000000" }}/>
                        <li className="text-xl font-extralight">Innosoft is a diverse, prosperous and rewarding place to work. Being part of the Innosoft family means we care about our employees’ wellbeing as well as our impact on our community and the environment.</li>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row">
                            <KeyboardArrowRightIcon fontSize="large" sx={{ color : "#000000" }}/>
                            <li className="text-xl font-extralight">What does wellbeing mean to Innosoft?</li>
                        </div>
                        <ul className="ml-5 gap-5 flex flex-col">
                            <div className="flex flex-row items-center gap-3">
                                <CircleOutlinedIcon fontSize="small" className="mt-1.5"/>
                                <li className="text-xl font-extralight">Community –Blood drives, monthly volunteering opportunities.</li>
                            </div>
                            <div className="flex flex-row gap-3">
                                <CircleOutlinedIcon fontSize="small" className="mt-1.5"/>
                                <li className="text-xl font-extralight">Professional Development –Continuing education and tuition assistance, career enrichment and advancement to help each employee with their professional and personal development.</li>
                                </div>
                            <div className="flex flex-row items-center gap-3">
                                <CircleOutlinedIcon fontSize="small" className="mt-1.5"/>
                                <li className="text-xl font-extralight">Wellness –Wellness programs, Flu Shots, on-site lactation rooms provide employees with several wellness options.</li>
                            </div>
                        </ul>
                    </div>
                    <div className="flex flex-row">
                        <KeyboardArrowRightIcon fontSize="large" sx={{ color : "#000000" }}/>
                        <li className="text-xl font-extralight">Innosoft provides our employees with cloud computing solutions to enable collaborative environments and reduce the need for printed documents.</li>
                    </div>
                    <div className="flex flex-row">
                        <KeyboardArrowRightIcon fontSize="large" sx={{ color : "#000000" }}/>
                        <li className="text-xl font-extralight">Innosoft’s commitment to sustainability is evidenced in our recycling program, secure shredding program, and use of reusable mugs and water tumblers at our offices.</li>
                    </div>
                </ol>
            </section>
            <section className="flex flex-col w-3/4 mx-auto gap-5 mb-12">
                <h2 className="text-2xl font-semibold">3. TRAVEL:</h2>
                <ol className="flex gap-5 flex-col">
                    <div className="flex flex-row">
                        <KeyboardArrowRightIcon fontSize="large" sx={{ color : "#000000" }}/>
                        <li className="text-xl font-extralight">Innosoft forgoes long-distance travel for internal purposes in favor of virtual meetings whenever possible. We meet clients virtually to lower our carbon footprint, keep travel costs down, and reinvest those savings in our workforce.</li>
                    </div>
                    <div className="flex flex-row">
                        <KeyboardArrowRightIcon fontSize="large" sx={{ color : "#000000" }}/>
                        <li className="text-xl font-extralight">Innosoft encourages its employees to opt for public transportation whenever possible, both for client and internal business travel. Employees based at Innosoft headquarters in Windsor Mill, Maryland and nearby offices take advantage of the DC Metro Area’s strong public transportation presence, which reduces their carbon footprints.</li>
                    </div>
                    <div className="flex flex-row">
                        <KeyboardArrowRightIcon fontSize="large" sx={{ color : "#000000" }}/>
                        <li className="text-xl font-extralight">Innosoft promotes alternative transportation solutions, such as carpooling, by connecting interested employees to such solutions.</li>
                    </div>
                </ol>
            </section>
            <p className="w-3/4 mx-auto font-extralight text-xl">Innosoft performs an annual review of its commitment to our Sustainability Policy in the fourth quarter. Annual review results and metrics will be available upon request. Innosoft is committed to further improving its sustainability efforts and achieving demonstrable year-over-year improvements.</p>
        </div>
    )   
}