import React from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react'


const PhTechStack = () => {
  return (
    <div className='ph-tech'>
      <CAccordion flush>
  <CAccordionItem itemKey={1}>
    <CAccordionHeader>Frontend</CAccordionHeader>
    <CAccordionBody>
      <strong>• HTML,CSS, JavaScript</strong><br />
      <strong>• React.Js</strong><br />
      <strong>• React.Js</strong><br />
      <strong>• Next.Js, Redux-tookit</strong><br />
      <strong>• Bootsrap</strong><br />
      
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem itemKey={2}>
    <CAccordionHeader>Backend & Database</CAccordionHeader>
    <CAccordionBody>
      <strong>• Node.Js, Express.Js.</strong> <br /> 
      <strong>• Rest APIs, MongoDB</strong> <br /> 
      <strong>• SQL, MySql, Prisma</strong> <br /> 
      <strong>• PosgreSql</strong> <br /> 
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem itemKey={3}>
    <CAccordionHeader>Programming & Dev Tools</CAccordionHeader>
    <CAccordionBody>
      <strong>• C/C++, TypeScript</strong><br />
      <strong>• Data Structers & Algorithms</strong><br />
      <strong>• Git, Github, VsCode</strong><br />
      <strong>• Postmans, FileZilla</strong><br />
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem itemKey={3}>
    <CAccordionHeader>Course Work</CAccordionHeader>
    <CAccordionBody>
      <strong>• Operating System, DBMS</strong><br />
       <strong>• Computer Networking, Assembly Language</strong><br />
       <strong>• Object-Oriented Programming (C++)</strong><br />
       <strong>• Computer Architecture</strong><br />
    </CAccordionBody>
  </CAccordionItem>
</CAccordion>
    </div>
  )
}

export default PhTechStack
