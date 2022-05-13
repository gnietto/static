// import React from 'react';
import {
  Box,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem
} from '@chakra-ui/react';

function Fvarela() {
  return (
    <Box id="main">
      <Heading as="h1" textAlign="center" id="title">
        Tributo a Francisco Varela
      </Heading>
      <Heading fontSize="md">
        "His Contributions to our kowledge are already remarkable for their
        originality, number and significance. As time goes on, the perceived
        noteworthiness of his work will no doubt increase, as will as belated
        appreciation of how much his death has cost us all"
      </Heading>
      <Heading fontSize="md">Randall Whittaker</Heading>

      <Text id="tribute-info" py="0.25rem">
        Francisco Varela nació en Chile el 7 de Septiembre de 1946. Tuvo 4
        hijos, siendo la actriz Leonor Varela la más conocida entre ellos.
        Francisco falleció en París el 28 de Mayo de 2001 a la edad de 54 años.
        Recibió reconocimiento de la comunidad científica internacional en la
        década de 1970 debido a la, para entonces, novedosa y profunda
        explicación de la organización de la vida tal como la conocemos, basada
        en el concepto de autopoiesis en trabajo conjunto con el biólogo
        Humberto Maturana.
      </Text>
      <Text py="0.25rem">
        La comunidad científica internacional de la época comenzó a referirse al
        trabajo estos dos científicos chilenos con el nombre de La Escuela de
        Santiago. Las publicaciones Principles of Biological Autonomy y
        Autopoiesis and Cognition desde entonces son consideradas textos
        centrales en el estudio de la Biología del Conocimiento y la Teoría de
        la Autopoiesis.
      </Text>
      <Text py="0.25rem">
        En algún momento de la década de 1980, los intereses científicos de
        ambos biólogos comenzaron a diverger. Francisco Varela se mantuvo
        produciendo mucha bibliografía en donde profundiza en las implicancias
        de la Teoría de la Autopoiesis y de la Teoría de Sistemas de Segundo
        Orden aplicada a sistemas biológicos. La relevancia de sus aportes lo
        llevaron a asumir el cargo de director del Centre National de la
        Recherche Scientifique (CNRS) en París desde el año 1988 hasta 2001, año
        en que se produciría su deceso.
      </Text>
      <Text py="0.25rem">
        La evolución de su pensamiento, considerando sus papers, libros y
        entrevistas que otorgó en vida, puede resumirse en cinco etapas
        relativamente bien delimitadas: la percepción de colores en insectos, la
        producción de la teoría de la autopoiesis, el desarrollo de la biología
        del conocimiento, los trabajos en redes cognitivas (por ejemplo, la red
        inmunológica), y la creación del campo de la neurofenomenología, cuyos
        resultados se acercan a la posición de la doctrina budista.{' '}
      </Text>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Percepción de Colores en Insectos
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <List>
              <ListItem>
                {' '}
                Varela, F. & Porter, K.R. (1969). The Fine Structure of the
                Visual System of the Honeybee. I. The retina. J Ultrastruct.
                Res, 29: 236-258{' '}
              </ListItem>
              <ListItem>
                Varela, F. & Maturana, H. (1970). Time Courses of Excitation and
                Inhibition in the Vertebrate Retina. Exp. Neurolog. 26, 53-59
              </ListItem>
              <ListItem>
                Varela, F. (1970). The Fine Strucure of the Visual System of the
                Honeybee II. The Lamina. J. Ultrastruct.Res, 31, 178-194
              </ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>{' '}
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Teoría de la Autopoiesis
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <List>
              <ListItem>
                {' '}
                Varela, F. & Maturana, H. (1974). Autopoiesis: The Organization
                of Living Systems, its Characterization and a Model. Biosystems,
                5: 187-196
              </ListItem>
              <ListItem>...</ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>{' '}
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Biología del Conocimiento
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>...</AccordionPanel>
        </AccordionItem>{' '}
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Redes Cognitivas
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>...</AccordionPanel>
        </AccordionItem>{' '}
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Neurofenomenología
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>...</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

export default Fvarela;
