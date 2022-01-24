import React from "react";
import MtCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import moment from "moment";

interface CardProps {
  data: any
}

const Card: React.FC<CardProps> = (props) => {

  const { data } = props;

  return (
    <MtCard sx={{ width: 250 }}>
      <CardContent>
        <Typography sx={{ fontWeight: 600, fontSize: 16 }}>{`${data.firstName} ${data.lastName}`}</Typography>
        <Typography>{moment(data.date).format("L")}</Typography>
        <Typography>{data.address}</Typography>
      </CardContent>
    </MtCard>
  )
}

export default Card;