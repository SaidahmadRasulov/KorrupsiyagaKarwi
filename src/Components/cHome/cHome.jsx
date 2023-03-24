import React, { useState } from 'react';
import { Box, Container, Text, Flex } from '@chakra-ui/react';
import bg from '../../assets/mainBg.png';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

function cHome() {

   const [state, setState] = useState(false);


   const handlePrevius = () => {
      setState(!state)
   }

   const handleNext = () => {
      setState(!state)
   }

   return (
      <Box as='section' h='90vh' bgImage={bg} bgRepeat='no-repeat' bgPos='center' mb='2rem' >
         <Container maxW='1100px' h='100%'>
            <Flex justify='center' align='center' h='100%' gap='1rem'>
               <Box className='prev__icon' cursor='pointer' onClick={() => handlePrevius()}>
                  <ArrowLeftIcon />
               </Box>
               <Box backdropFilter='auto' backdropBrightness='50%' padding='1rem' borderRadius='10px' h='60%' overflow={['hidden']}>
                  <Text mb='1rem' textAlign='center' fontSize={['1.4rem', '2rem']} color='white' textShadow='2px 2px black'>
                  КОРРУПЦИЯСИЗ КЕЛАЖАК
                  </Text>
                  <Text color='white' textOverflow='ellipsis' overflow='hidden'>
                     {
                        state ? '“КОРРУПЦИЯСИЗ КЕЛАЖАК” Коррупцияга қарши курашиш жамоат бирлашмаси (ННТ) (Адлия вазирлигида 04.11.2020 йил 1048-сон билан рўйхатдан ўтказилган) “Нодавлат нотижорат ташкилотлари тўғрисида” ги Қонун ҳамда ўз устав мақсадларидан келиб чиқиб Республикамизнинг олий ва ўрта махсус ўқув юртлари талабалари орасида жамиятимизда коррупция ва коррупцион холатларга нисбатан муросасиз муносабатни шакллантириш, коррупцияга қарши курашда ҳуқуқий кўникмаларни ҳосил қилиш фаолияти доирасида ҳамда коррупцияга қарши курашиш давлат сиёсати доирасида Мухаммад ал-Хоразмий номидаги Тошкент Ахборот Технологиялари Университети Самарқанд филиали ходимлари ва талабалари иштирокида коррупцияга қарши курашиш кўникмаларини яратишга қаратилган давра сухбати ўтказилди. Давра сухбати “КОРРУПЦИЯСИЗ КЕЛАЖАК” коррупцияга қарши курашиш нодавлат нотижорат ташкилоти ташаббуси билан ҳуқуқни муҳофаза қилувчи органлар, ўқув юрти маъмурияти ҳамкорлигида ўтказилди ва талабалар иштирокида “Коррупциянинг фаровон келажагимизга хавфи” ва "Коррупциясиз таълим" мавзусида маъруза ва савол-жавоб тарзидаги тарғибот тадбирлари ташкил этилди'
                        : "Korrupsiyaning farovon kelajagimizga xavfi 2023 йил 27 январь куни Қумкўргон туманида жойлашган Қумқургон Агротехнология техникумида 'Коррупциясиз келажак' коррупцияга қарши курашиш ННТнинг Ёшлар ўртасида 'Коррупциянинг фаровон келажагимизга хавфи' мавзусида тадбир ўтказилди. Тадбирда 'Коррупциясиз келажак' коррупцияга қарши курашиш ННТнинг вакили С.Шукуров, туман Адлия бўлим бошлиғи Р.Султонов, Халк Демократик партияси аъзоси М.Номозов, туман прокурор ёрдамчиси К.Туракулов, туман Ички ишлар бўлими ходими М.Тангировлар катнашди."
                     }   
                  </Text>
               </Box>
               <Box className='next__icon' cursor='pointer' onClick={() => handleNext()}>
                  <ArrowRightIcon />
               </Box>
            </Flex>
         </Container>
      </Box>
   )
}

export default cHome