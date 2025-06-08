'use client'

import Header from '@/components/layout/pdf-renderer/HeaderSection'
import Content from '@/components/layout/pdf-renderer/PdfContent'
import PdfViewerSkeleton from '@/components/skeleton/PdfViewerSkeleton'
import Pagina from '@/components/templates/Pagina'
import TopBar from '@/components/templates/TopBar'
import { UserModel } from '@/data/models/UserModel'
import { Document, Page, StyleSheet } from '@react-pdf/renderer'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import KanitFontRegisterer from '../../util/FontsRegisterer/KanitRegister'

const PDFViewer = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
)

const styles = StyleSheet.create({
  mainContaiener: {
    flexDirection: 'row',
  },
})

KanitFontRegisterer()

export default function ExportDocument(props: any) {
  const [userData, setUserData] = useState<UserModel>()
  const [isLoading, setIsLoading] = useState<Boolean>(true)

  useEffect(() => {
    async function getData() {
      const responseUserData = await fetch('api/user')
      const json: UserModel = await responseUserData.json()
      console.log(json)
      setIsLoading(false)
      setUserData(json)
    }
    getData()
  }, [])

  return (
    <>
      <TopBar />
      <Pagina header="My Resume" childStyling="h-[50em]" headerStyling="pb-5">
        <div className="h-full">
          {!isLoading && userData ? (
            <PDFViewer className="w-full h-full m-auto">
              <Document>
                <Page size={'A4'} style={styles.mainContaiener}>
                  <Header data={userData} />
                  <Content
                    experienceData={userData.my_experiences}
                    projectsData={userData.my_projects}
                    educationData={userData.my_education}
                  />
                </Page>
              </Document>
            </PDFViewer>
          ) : (
            <PdfViewerSkeleton />
          )}
        </div>
      </Pagina>
    </>
  )
}
