import React from 'react';
import { Card } from 'antd';
import Link from 'next/link';
import { StaticImageData } from 'next/image';
import { Image } from 'antd';
const { Meta } = Card;
type SessionItemProps = {
  session: {
    id: string;
    title: string;
    summary: string;
    image: StaticImageData;
  }
};



const SessionItem: React.FC<SessionItemProps> = ({ session }) => {

  return (<Link href={`sessions/${session.id}`}>
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<Image alt={session.summary} src={session.image.src} />}
      onClick={() => {

      }}
    >
      <Meta title={session.title} description={session.summary} />
    </Card>

  </Link>)
}
export default SessionItem;