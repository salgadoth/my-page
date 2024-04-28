'use client'

import dynamic from 'next/dynamic'
import { Document, Font, Page, StyleSheet } from '@react-pdf/renderer'
import Header from '@/components/layout/pdf-renderer/Header'
import Content from '@/components/layout/pdf-renderer/Content'
import { useEffect, useState } from 'react'
import { UserModel } from '@/data/models/UserModel'
import Spin from '@/components/layout/Spin'

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

Font.register({
  family: 'Roboto',
  src: `http://fonts.gstatic.com/s/roboto/v16/zN7GBFwfMP4uA6AR0HCoLQ.ttf`,
})

Font.register({
  family: 'Lato',
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
  fontWeight: 'bold',
})

export default function ExportDocument(props: any) {
  const [userData, setUserData] = useState<UserModel>()

  useEffect(() => {
    async function getData() {
      const response = await fetch('api/user')
      const json: UserModel = await response.json()
      console.log(json)
      setUserData(json)
    }
    getData()
  }, [])

  if (userData) {
    return (
      <div className="h-screen">
        <PDFViewer className="w-full h-full">
          <Document>
            <Page size={'A4'} style={styles.mainContaiener}>
              <Header data={userData} />
              <Content
                experienceData={userData.my_experiences}
                projectsData={userData.my_projects}
              />
            </Page>
          </Document>
        </PDFViewer>
      </div>
    )
  } else {
    return (
      <Spin childClassName="!text-black">
        <p>Loading...</p>
      </Spin>
    )
  }
}
