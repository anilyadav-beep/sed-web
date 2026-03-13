import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Link from '@mui/material/Link';
import shipment from './../../../../assets/products/firstshipment.png';

const BlogContent = () => {
  return (
    <Box paddingX={{ xs: 0, sm: 4, md: 6 }}>
      <Typography variant="subtitle1" align="center" gutterBottom>
        January 2025
      </Typography>
      <Box marginY={4}>
        <Typography variant="body1" gutterBottom textAlign={'justify'}>
          When we got going on our generator controls journey in 2009, we don’t think anybody would have guessed that our products would be in use in over 1 Million generators worldwide some day.
        </Typography>
        <br />
        <Typography variant="h5" gutterBottom align="center">
          Today We Are
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" color="black" textAlign={'justify'}>
              <b>Dominant in India:</b> India today produces about 150,000 generators, excluding portables, each year. In the last 15 years -- during the time we have been operational -- an estimated 2-2.5 Million of these generators have been produced in India. We have touched 780,000 of them starting from zero in 2009.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <br />
            <Typography
              variant="h4"
              color="secondary.dark"
              align="center"
              fontWeight="normal"
              textAlign={'justify'}
            >
              60-70% of generators produced in India use our products.
            </Typography>
          </Grid>
          {/* Second Point - Global Relevance */}
          <Grid item xs={12} md={6}>
            <Typography variant="body1" color="black" gutterBottom textAlign={'justify'}>
              <b>Globally Relevant:</b> The world produces about 1.8-2 Million generators, excluding portables, each year. Within 5-6 years of us starting to address customers outside India, we have touched over 220,000 generators outside India primarily in the US and the EU. In the period Jan-Dec 2024, our controllers were used in over 200,000 generators. <br /><br /> Rarely is it the case that a company from India sells the same products/services both in India and to varied markets outside of it. Given features and associated pricing vary significantly across markets, companies have struggled to offer similar products across geographies at scale. That has not been the case with our genset control products. We sell similar/the same products across geographies with a consistent pricing framework.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              color="secondary.dark"
              align="center"
              fontWeight="normal"
              textAlign={'justify'}
              paddingTop={{ xs: 2, sm: 2, md: 0 }}
            >
              One out of every ten gensets manufactured, globally, uses a controller from us. <br /> <br /> <br /> <br /> ~40% of our controllers address generators outside India.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Typography variant="h5" gutterBottom align="center">
        Story Thus Far
      </Typography>
      <Typography variant="body1" gutterBottom textAlign={'justify'}>
        Globally, generators has been a stable, slow growth market.<b> How is it that we have grown handsomely in this environment? Was not the business all figured by the incumbents involved?</b> <br /> <br />We provide some reasons.
        <br /><br />
      </Typography>
      <Typography variant="h6" gutterBottom>
        #1 Innovative Interventions
      </Typography>
      <Grid container spacing={4}>
        {/* Left Column - Black Text */}
        <Grid item xs={12} md={6}>
          <Typography variant="body1" color="black" gutterBottom textAlign={'justify'}>
            Perhaps the biggest reason for our emergence has been the intent and ability to continually come up with innovative technological interventions. Not all our propositions have worked but the relentlessness of our efforts at coming up with ways to change things for the better has worked for us. We look at a few below.
          </Typography>
        </Grid>
        {/* Right Column - Secondary.dark Text */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            color="secondary.dark"
            fontWeight="bold"
            gutterBottom
            textAlign={'justify'}
          >
            &#34;I wish to express my immense pride in being associated with SEDEMAC since its inception. The agility and remarkable innovative capabilities of SEDEMAC have propelled the company to incredible heights. I am confident that SEDEMAC will continue to break numerous records in the coming years and elevate Indian engineering to even greater global prominence.&#34;
          </Typography>
          <Typography variant="body2" color="secondary.dark" align="right">
            — M Sathyanandan,<br />Head, Power Solutions Business, Ashok Leyland; <br />Jan 2025
          </Typography>
        </Grid>
      </Grid>
      <br /><br />
      <Typography variant="body1" gutterBottom textAlign={'justify'}>
        <b>Affordable Electronic Governing:</b> Back in 2009, we saw that electronic governing (EGOV) was seen as too expensive to realize on smaller gensets. We showed that one could use coarse actuators coupled with smart algorithms to achieve governing action on par with what other solutions with more expensive, precise actuators. This offering had the effect that by 2011/12 major genset manufacturers in India were actively considering electronic governing as a default feature they could offer on all gensets including smaller ones.
        <br />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          marginY={4}
        >
          <img
            src={shipment}
            alt="SEDEMAC Milestone"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Typography variant="body2" color="textSecondary" fontStyle="italic" marginTop={2}>
            Our first shipment of genset control products. 5 units of EGOV sets supplied in Nov 2009.
          </Typography>
        </Box>
        <br />
        <b>Enabling Variable Speed in Telecom Tower Generators:</b> Between 2010 and 2014/15, we were an important part of industry-wide efforts to reduce fuel consumption in generators used in India’s telecom towers. India’s telecom infrastructure was rapidly expanding then and given poor power availability, generators used in Telecom towers were guzzling 2-3 billion litres annually. <br /><br />
        An idea that showed massive promise towards reducing fuel consumption in telecom tower gensets was to run engines at lower than the usual -- 50Hz linked -- synchronous speed of 1500rpm. Two reasons why this idea was explored actively were: (1) Telecom tower generators worked most of the time at low loads (compared to their rated power) and (2) Base station/active electronics were DC powered i.e. generators were essentially functioning as battery chargers. So, the idea was to run the generator at low speeds (and associated higher torques) most of the time. Power, then, was produced at frequencies different from 50Hz and the SMPS handled the charging of batteries even if fed with power at different from 50Hz frequency. <br /><br />
        Our EGOVs were the key enabler of variable speed diesel generators but the proposition went far beyond that. We worked with engine makers, telecom tower companies, their service providers, scores of field technicians etc to architecture a solution and establish an involved retrofit process that could make the variable speed solution a reality. Field results from about a few tens of sites indicated up to 30% saving in diesel fuel consumption. Sometimes more. <br /><br />
        Unfortunately, the promise of the solution towards massively reducing fuel consumption did not see fruition at scale. The main reason being that the retrofit process was messy, tended to be site specific and required trained technicians to sort things out while at the site. We didn’t see this failure coming early enough, neither did the big genset makers. Several years of time and money were spent by those involved. But it taught us a lot. Primarily, that retrofit proposition rarely work at scale.
        <br /><br />
        <b>Supervisory/AMF Controllers and Integration with Electronic Governing:</b> While our electronic governing offering and telecom variable speed offerings were innovative, we also wanted widespread deployment of our products. Supervisory genset controllers were used on every single generator. So, building a suite of supervisory controllers was a natural thought. But would we only offer similar controllers others across the world were already providing? Would it just be a case of tapping into an import substitution opportunity in India? <br /><br />
        Rather than simply evolve into yet another company making only supervisory genset controllers, we also offered integrating the electronics of EGOVs into that of supervisory genset/AMF controllers. Doing so provided us a strong competitive advantage since few companies in the world could do both supervisory and engine controls under one roof. This competitive position allowed us to grow quickly. Today, we are amongst the top 3 independent supervisory controller makers by volume in the world. And a substantial part of these controllers continues to be offered with EGOV electronics integrated. <br /><br />
        A nice development, which we hadn’t explicitly planned for when we got going, was that the integration also allowed us to address needs of the North American home standby market using spark-ignited engines (since spark-ignited engines are throttled, generators using them use EGOV as a default).
      </Typography>
      <br /><br />
      <Typography variant="h6" gutterBottom>
        #2 Quality Record
      </Typography>
      <Grid container spacing={4}>
        {/* Left Column - Black Text */}
        <Grid item xs={12} md={6}>
          <Typography variant="body1" color="black" gutterBottom textAlign={'justify'}>
            Reliability plays a crucial role in scale up products especially when you seek to sell to customers in distant geographies. Our quality track record of has been one of the key factors in us being able to reach this 1Mn+ milestone and has propelled our exports story. For supervisory genset controllers, meeting CE/UL standards, moving continually to more robust designs based on field feedback and implementation of learnings from products we supply to the less forgiving automotive industry has helped us hugely. Today we operate at one year failure rates of ~0.15% for supervisory generator controllers– amongst the best in the genset industry.
          </Typography>
        </Grid>
        {/* Right Column - Secondary.dark Text */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            color="secondary.dark"
            fontWeight="bold"
            gutterBottom
            textAlign={'justify'}
          >
            &#34;SEDEMAC achieving the milestone of powering over 1 million gensets is commendable and highlights their dedication to delivering innovative and reliable solutions. As their first customer, Kirloskar Oil Engines has closely witnessed SEDEMAC&#39;s journey of growth and commitment to quality. Their ability to address industry challenges with practical and efficient solutions has consistently added value to our operations. We congratulate SEDEMAC on this significant achievement and look forward to their continued contributions to the power generation industry&#34;
          </Typography>
          <Typography variant="body2" color="secondary.dark" align="right">
            — Prasad Dharmadhikari, <br />VP Head Supply Chain Management, <br /> Kirloskar Oil Engines Ltd; <br /> Jan 2025
          </Typography>
        </Grid>
      </Grid>
      <br /><br />
      <Typography variant="h6" gutterBottom>
        #3 Synergy with our high-volume two-wheeler controls business
      </Typography>
      <Typography variant="body1" gutterBottom textAlign={'justify'}>
        We are not just about generator controls. The biggest contributor to our revenues today are our control products for two-wheelers (motorcycles, scooters etc). While we address around 200,000 generators each year, we address an order of magnitude higher number of two-wheelers. <br /> <br />  Our two-wheeler controller story has propelled our genset controls business in several ways. <br /> <br />
      </Typography>
      <Typography variant="body1" gutterBottom textAlign={'justify'}>
        <li>Due to us being a large volume buyer of semi-conductor components for our two-wheeler controls business, we have been able to bring in price and delivery consistency to our genset controls business. Crucially, we were also able to successfully ride through the COVID-induced global semi-conductor crisis through a combination of internal agility and technical strength (in coming up with new designs around available components) and due to our relationships with semi-conductor vendors.</li>
        <li>It has allowed us to optimally utilize investments into establishing world-class SMT lines. Had we been in the genset controls business alone, our return on investment on our genset product manufacturing lines would have been much poorer and/or pricing of our genset control products would likely not have been as attractive.</li>
        <li>Our fuel-injection control offerings for spark-ignited-engine-powered gensets in the US have been heavily influenced those that we have offered for the India two-wheeler market.</li>
      </Typography>
      <br />
      <Typography variant="h6" gutterBottom>
        #4 Focus on a small number of large volume customers
      </Typography>
      <Typography variant="body1" gutterBottom textAlign={'justify'}>
        Successful supervisory genset controller companies such as Deepsea, Smartgen, Comap etc have built their businesses around serving a large number of small customers through a well-run dealer network. We have gone about it exactly the other way around. Since inception, our DNA has been about taking innovative propositions to potential large volume adopters. <br /><br />
        Selling to a small number of large volume customers comes with its own risks and rewards. As a young company yet to establish itself, you typically do not get opportunities for high volume supplies to established leaders unless you have something that’s both unique and reliable. The good side of it is that you get great reward should you be successful in building a solid business selling to the biggies: you have a highly sticky customer base that places consistent orders and you can grow rapidly, especially early on, with smaller sales & marketing spends. <br /><br />
        The structure of our first/home market ie India has possibly helped positively with shaping our approach. Unlike say the Chinese or European genset market, the Indian generator market is consolidated (the US market too is dominated by large entities). We continue to like the structure of our business preferring to partner with other players for distribution to smaller customers for geographies we do not have as much direct access in.
      </Typography>
      <br />
      <Typography variant="h5" gutterBottom align="center">
        What’s Next?
      </Typography>
      <Typography variant="body1" gutterBottom textAlign={'justify'}>
        Our <Link href='/products/generators' color="inherit" target='blank'>key offerings</Link> today include supervisory controllers with/without engine control integration and fuel-injection controls for small gas-powered generators. <br /><br /> These product lines are here to stay. <b style={{ color: '#A03811' }}> But are we done as far as significant product development is concerned in our journey of being a controller maker for back-up power providers? Far from it.</b> <br /> <br />In the short-midterm, our intervention foci will be:
      </Typography>
      <Typography variant="body1" gutterBottom textAlign={'justify'}>
        <b>Minimal sensing common-rail ECU:</b> To meet with stricter emission norms, diesel engines used in generators, especially the larger capacity ones, have moved to common-rail (CR) fuel-injection systems. The CR system used on these generators is often derived from systems used in automotive (car/bus/truck) application. Given that the generator application use case is different from automotive, there are opportunities for significant optimization. One such intervention that we demonstrated first way back in 2013 is the elimination of sensors -- leading to a simpler and cost-effective CR solution.  <br />
        <br />
        <b>Integration of alternator controls into supervisory control offerings:</b> Akin to how we have integrated engine controls into our supervisory generator controllers, there is an opportunity to integrate alternator controls. Such an integration can enable performance improvements in generators (e.g. better block loading capability or faster response to block loads or elimination of flicker in gensets single/twin cylinder gensets). In addition, it can provide benefits of digital control of alternator, which in most gensets use analog controls today, in a cost-effective fashion.<br />
        <br />
        <b>Potential elimination of starter motor in smaller gensets:</b> We have been a pioneer of starter motor elimination in two-wheelers in India, through our first-in-the-world <Link href='/isg' color="inherit" target='blank'>Sensorless Integrated Starter Generator (ISG) technology</Link>, which has now seen adoption in millions of vehicles. The technology is relevant also to genset engines and can potentially bring benefits of significant improvement in reliability and flexibility in engine starting and in battery charging. <br />
      </Typography>
      <br />
      <Typography variant="body1" gutterBottom textAlign={'justify'}>
        <Typography
          variant={'h6'}
          color={'secondary.dark'}
          fontWeight={'normal'}
          textAlign={'justify'}
          paddingY={{ xs: 2, sm: 2, md: 2 }}
        >
          In the long run, given our strength in two-wheeler and automotive controls including power electronics and inverters for electric vehicles, we believe we will be an important controls partner to back-up power providers: both for generators as well as battery powered back-up systems.
        </Typography>
        <br /><br />
        We thank all our customers, our vendors, our partners, employees past & present who have contributed to our story thus far. It took us 15 years to touch the first million gensets. <b>With testimonials such as the one below, we are well-positioned to address our next million over the next 3-5 years.</b>
      </Typography>
      <Grid item xs={12} md={12}>
        <br />
        <Typography
          variant="body1"
          color="secondary.dark"
          fontWeight="bold"
          gutterBottom
          textAlign={'justify'}
        >
          &#34;At Mahindra Powerol, we take pride in forging long-term partnerships that drive innovation, efficiency, and excellence in the power solutions industry. Our collaboration with SEDEMAC stands as a true example of a synergy that has redefined possibilities in generator technology. <br /><br />
        </Typography>
        <Typography
          variant="body1"
          color="secondary.dark"
          fontWeight="bold"
          gutterBottom
          textAlign={'justify'}
        >
          We are also excited about the future possibilities of SEDEMAC’s upcoming advancements, including minimal sensing common-rail ECU and alternator control integration.
          <br /><br />
          <Typography
            variant="body1"
            color="secondary.dark"
            fontWeight="bold"
            gutterBottom
            textAlign={'justify'}
          >
            As this partnership continues to evolve, both companies are well-positioned to lead the charge in providing the next generation of intelligent, eco-friendly, and efficient power solutions. The long-term nature of the collaboration is a testament to the trust, alignment of vision, and shared commitment to excellence that has driven the mutual success of Mahindra Powerol and SEDEMAC.
            Here’s to many more milestones together as we continue to power our progress.&#34;
          </Typography>
        </Typography>
        <Typography
          variant="body2"
          color="secondary.dark"
          align="right"
          gutterBottom
        >
          — Sanjay Jain, <br />Business Head & CEO,<br /> Mahindra Powerol & Solarize; <br />Jan 2025
        </Typography>
      </Grid>
    </Box>
  );
};

export default BlogContent;
