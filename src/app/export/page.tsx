'use client'

import dynamic from 'next/dynamic'
import { Document, Page, View, Text } from '@react-pdf/renderer'

const PDFViewer = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
)

export default function ExportDocument(props: any) {
  return (
    <PDFViewer>
      <Document>
        <Page size={'A4'}>
          <View>
            <Text>Section #1</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}
