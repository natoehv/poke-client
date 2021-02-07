import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import TypeTag from '../atoms/TypeTag';

import './Item.scss';
import { Sprites, Stat, Type } from '../../domain/entities/API';

type ItemProps = {
  name: string;
  types?: Type[];
  sprites?: Sprites
  stats?: Stat[]
}

const getAvatar = (sprites: Sprites) => {
  return sprites.other['official-artwork'].front_default || '';
}

function Item({ name, types = [], sprites, stats = [] }: ItemProps) {
  const [shownDetail, setShownDetail] = useState(false);
  const cardClick = () => {
    setShownDetail(!shownDetail);
  }
  return (
    <Card className="item" color="primary" onClick={cardClick}>
      <CardActionArea color="primary">
        { sprites && <CardMedia
          className="item__avatar"
          image={getAvatar(sprites)}
          title={name}
        />}
        <CardContent>
          <Typography className="item__title" gutterBottom variant="h5" component="h2">
            {name}
            {types.map((type) =>
              <div key={type.slot} className="item__chip">
                <TypeTag type={type} />
              </div>)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">

          </Typography>
        </CardContent>
        { <Collapse in={shownDetail}>
          <CardContent>
          { stats.map(({stat, base_stat}) => 
          <Box key={stat.url} display="flex" alignItems="center">
            <Box minWidth={150}>
              <Typography variant="body2" color="textSecondary">{`${stat.name}: ${base_stat}`}</Typography>
            </Box>
            <Box width="100%" mr={1}>
              <LinearProgress variant="determinate" value={base_stat} />
            </Box>
          </Box>)}
        </CardContent>
        </Collapse>}
      </CardActionArea>
    </Card>
  );
}

export default Item;
