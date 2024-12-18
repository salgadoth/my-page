'use client'

import dynamic from 'next/dynamic'
import { Document, Page, StyleSheet } from '@react-pdf/renderer'
import Header from '@/components/layout/pdf-renderer/Header'
import Content from '@/components/layout/pdf-renderer/Content'
import { useEffect, useState } from 'react'
import { UserModel } from '@/data/models/UserModel'
import Spin from '@/components/layout/Spin'
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

  if (!isLoading) {
    if (userData)
      return (
        <div className="h-screen">
          <PDFViewer className="w-full h-full">
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
