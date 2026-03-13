import React from 'react';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import Media from 'common/Media';
const mock = [
  {
    media: 'https://www.youtube.com/embed/Q-R8NjBoCrQ?si=8avwCb3llyLtRHcQ',
    title: 'Users',
    description:
      'Users share the delight of silent starts.',
  },
  {
    media: 'https://www.youtube.com/embed/FAtwRV9m-iY?si=0l0O5Yi_TNbNEEzp',
    title: 'Reviewers',
    description:
      'A populer v-logger about silent start, pay attention to the first thing he says.',
  },
];

const Content = () => {
  return (
    <Box>
      <Typography variant="subtitle1" align="center" gutterBottom>
        September 2023
      </Typography>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }}>
        <Typography
          variant={'subtitle1'}
          paddingY={{ xs: 2, sm: 2, md: 2 }}
          textAlign={'justify'}
        >
          <br />
          <br />
          <br />
          The world produces 50 Million internal combustion engine (ICE)-powered
          2-wheelers every year today, 20 Million of which are made in India.
          Over the next two decades, electric powered 2-wheelers are set to eventually become dominant. However, it is likely that over 150 Million ICE powered 2-wheelers would still be produced in India, cumulatively, during this period.
        </Typography>
        <Typography
          variant={'h6'}
          paddingY={{ xs: 2, sm: 2, md: 2 }}
          textAlign={'justify'}
        >
          A big technology change has happened in ICE-powered 2-wheelers. EFI.
        </Typography>
        <Typography
          variant={'subtitle1'}
          paddingY={{ xs: 2, sm: 2, md: 2 }}
          textAlign={'justify'}
        >
          Prior to 2020, all ICE-powered 2-wheelers sold in India used
          carburetors to introduce fuel into the engine. However, with the BS VI
          emission regime kicking-in in April 2020, almost all ICE 2-wheeler
          models sold since then have moved to Electronic Fuel Injection (or
          EFI) as their fueling technology – eliminating carburetors. EFI
          provides the benefits of reduced carbon-monoxide, hydrocarbon and
          nitrogen-oxide emissions and also improved startability/drivability to
          end-users.
        </Typography>
        <Typography variant={'h6'} paddingY={{ xs: 2, sm: 2, md: 2 }}>
          Another significant technology change is afoot in ICE-powered
          2-wheelers. ISG.
        </Typography>
        <Typography
          variant={'subtitle1'}
          paddingY={{ xs: 2, sm: 2, md: 2 }}
          textAlign={'justify'}
        >
          Until 2018, ICE-powered 2-wheelers in India predominantly had starter motor
          based electric start systems. Some vehicles had only kick-start systems. That
          situation has changed significantly with the introduction of Integrated Starter
          Generators (ISG). ISG eliminates the starter motor system and a single electric
          machine acts as both a motor (during engine start) and as a generator (for battery
          charging when the vehicle is running).
        </Typography>
        <Typography
          variant={'h4'}
          color={'secondary.dark'}
          align={'center'}
          fontWeight={'normal'}
          paddingY={{ xs: 2, sm: 2, md: 2 }}
        >
          Over 30% of ICE-powered 2-wheelers sold in India today use Integrated
          Starter Generator (ISG) systems. Was zero in 2018.
        </Typography>
        <Typography
          variant={'h6'}
          paddingY={{ xs: 2, sm: 2, md: 2 }}
          textAlign={'justify'}
        >
          So why is this change happening? Why are OEMs adopting ISG in place of
          starter motors when there is no legislation to do so?
        </Typography>
        <Typography
          variant={'subtitle1'}
          paddingY={{ xs: 2, sm: 2, md: 2 }}
          textAlign={'justify'}
        >
          ISG provides users with a delightful start experience leading also to
          a sense of a refined vehicle. Further, ISG systems are micro-hybrid
          systems that enable start-stop and power assists, both of which
          contribute to reduced CO2 emissions.
        </Typography>
        <Typography variant={'h6'} paddingY={{ xs: 2, sm: 2, md: 2 }}>
          SEDEMAC is shaping this move from starter motor systems to ISG.
        </Typography>
        <Typography
          variant={'subtitle1'}
          paddingY={{ xs: 2, sm: 2, md: 2 }}
          textAlign={'justify'}
        >
          We were the first to introduce ISG in India back in 2018. We are also
          the first and currently the only company to offer ISG systems for this
          largest class of ICE 2-wheelers – motorcycles with oil-immersed
          alternators -- made possible due to our{' '}
          {/* <a href="/technology" target="_blank" rel="noreferrer"> */}
            sensorless commutation technology
          {/* </a> */}
          . Today, over 4 Million users across the world use our sensorless ISG systems daily and the numbers are growing rapidly with OEMs introducing them on more and more high volume models.
        </Typography>
        <Typography
          variant={'h6'}
          paddingY={{ xs: 2, sm: 2, md: 2 }}
          color={'alternate'}
          textAlign={'center'}
        >
          Listen in to what users & reviewers have to say.
        </Typography>
        <Grid container display="flex" justifyContent="center"spacing={2}>
          {mock.map((item, i) => (
            <Grid item xs={12} sm={6} md={6} key={i}>
              <Media item={item} i={i} type="blog" />
            </Grid>
          ))}
        </Grid>
        <Typography
          variant={'h4'}
          color={'secondary.dark'}
          align={'center'}
          fontWeight={'normal'}
          paddingY={{ xs: 2, sm: 2, md: 2 }}
        >
          SEDEMAC is the only company, globally, that has enabled ISG in all
          types of ICE-powered 2-wheelers: motorcycles, scooters and
          mopeds, whether fuel-injected or carbureted.
        </Typography>
        <Typography variant={'h6'} paddingY={{ xs: 2, sm: 2, md: 2 }}>
          Cost increases due to EFI & ISG; Enter integration of electronics of
          EFI & ISG.
        </Typography>
        <Typography variant={'subtitle1'} textAlign={'justify'}>
          EFI and ISG are two disruptive control technologies for ICE powered
          2-wheelers. While these technologies have led to cleaner/greener
          vehicles and user delight, their introduction has also led to
          increased costs seen by OEMs and therefore end-users. It is natural
          therefore that one explores ways to reduce costs. One such substantial
          cost-saving idea is the integration of the electronics used for ISG
          with that used for EFI thereby reducing duplication of components.
        </Typography>
        <br />
        <br />
        <Typography variant={'subtitle1'} textAlign={'justify'}>
          Due to our leadership position in ISG around our sensorless technology and since we also offer
          electronic control units (ECUs) for EFI, we are in a unique position to drive the adoption of
          electronic controllers that do the job of the brain of both ISG & EFI systems. The integrated
          sensorless ISG+EFI controller offering from us, we believe, is a compelling proposition that will
          accelerate the complete elimination of starter motors from ICE-powered, fuel-injected 2-wheelers.
        </Typography>
        <Typography
          variant={'h4'}
          color={'secondary.dark'}
          align={'center'}
          fontWeight={'normal'}
          paddingY={{ xs: 2, sm: 2, md: 2 }}
        >
          The first high volume vehicle models equipped with SEDEMAC&apos;s sensorless
          ISG+EFI controller offering are likely to hit the market early in
          2024.
        </Typography>
        <Typography
          variant={'subtitle1'}
          paddingY={{ xs: 2, sm: 2, md: 2 }}
          textAlign={'justify'}
        >
          With millions of units of deployments and billions of kilometers of
          use, our ISG proposition, currently in its third generation,
          have evolved into reliable, proven & optimal offerings. Large volume
          deployment has also helped SEDEMAC form strong relationships with
          global semiconductor companies which are suppliers of crucial
          components such as MOSFETs and microcontrollers. <br /><br />Economies of scale arising from
          large deployments, and elimination of duplication of electronics,
          means that now the numbers associated with our ISG offerings are such that it{' '}
          <b style={{ color: '#A03811' }}>no longer makes sense to use starter motors on many models.</b>
        </Typography>
        <Typography
          variant={'h4'}
          color={'#A03811'}
          align={'center'}
          fontWeight={'normal'}
          paddingY={{ xs: 2, sm: 2, md: 2 }}
        >
          It is rare that substantially better technology leads to lower costs
          as well over a short time frame. That has happened with
          SEDEMAC&apos;s ISG offerings
        </Typography>
        <Typography
          variant={'subtitle1'}
          paddingY={{ xs: 2, sm: 2, md: 2 }}
          textAlign={'justify'}
        >
          We invite all OEMs to work with us towards eliminating starter motors
          completely from ICE 2-wheelers and move to EFI integrated sensorless
          ISG systems enabling{' '}
          <b style={{ color: '#A03811' }}>
            all your end-customers to experience delightful, reliable starts.
          </b>
        </Typography>
      </Box>
    </Box>
  );
};

export default Content;
