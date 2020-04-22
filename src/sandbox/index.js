import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Grid } from '../index';

const Sandbox = () => {
  const gridStyle = {
    padding: '5px',
  };
  return (
    <Card>
      <h1>Button</h1>
      <Grid style={{ height: 500 }}>
        <Grid flow={'row'} stretch={'full'} valign={'center'} align={'center'} wrap>
          <Grid css={gridStyle} valign={'top'} align={'left'} size={32}>
            <Button>Text</Button>
          </Grid>
          <Grid css={gridStyle} align={'center'} size={32}>
            <Button size={'large'}>Text</Button>
          </Grid>
          <Grid css={gridStyle} valign={'bottom'} align={'right'} size={31}>
            <Button>Text</Button>
          </Grid>
          <Grid css={gridStyle} valign={'center'} align={'right'} size={3}>
            <Button size={'small'}>Text</Button>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

ReactDOM.render(<Sandbox/>, document.getElementById('root'));
