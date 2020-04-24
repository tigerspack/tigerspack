import React from 'react';
import ReactDOM from 'react-dom';
import {
  Alert, Button, Blank, Card, Grid, Input, Title,
} from '../index';

const Sandbox = () => {
  const gridStyle = {
    padding: '5px',
  };
  return (
    <Grid flow={'column'} stretch={'width'} padding={15}>
      <Card outline title={'Alert component'}>
        <Grid flow={'row'} stretch={'width'}>
          <Grid size={6} padding={5}>
            <Alert theme="danger">Danger</Alert>
            <Alert dismissible theme="warning">Warning</Alert>
            <Alert dismissible theme="success">Success</Alert>
            <Alert theme="info">Info</Alert>
          </Grid>
          <Grid size={6} padding={5}>
            <Alert outline theme="danger">Danger</Alert>
            <Alert dismissible outline theme="warning">Warning</Alert>
            <Alert dismissible outline theme="success">Success</Alert>
            <Alert outline theme="info">Info</Alert>
          </Grid>
        </Grid>
      </Card>

      <Card outline title={'Button component'}>
        <Title>Colors</Title>
        <Blank border={'light'} rounded={5} shadow={3} indent={15}>
          <Grid>
            <Grid flow={'row'} stretch={'full'} align={'center'} wrap>
              <Grid css={gridStyle} valign={'top'} align={'left'} size={32}>
                <Button theme="primary">Primary</Button>
              </Grid>
              <Grid css={gridStyle} valign={'top'} align={'left'} size={32}>
                <Button theme="yellow">Yellow</Button>
              </Grid>
              <Grid css={gridStyle} valign={'top'} align={'left'} size={32}>
                <Button theme="danger">Danger</Button>
              </Grid>
              <Grid css={gridStyle} valign={'top'} align={'left'} size={32}>
                <Button theme="warning">Warning</Button>
              </Grid>
              <Grid css={gridStyle} valign={'top'} align={'left'} size={32}>
                <Button theme="success">Success</Button>
              </Grid>
              <Grid css={gridStyle} valign={'top'} align={'left'} size={32}>
                <Button theme="info">Info</Button>
              </Grid>
              <Grid css={gridStyle} valign={'top'} align={'left'} size={32}>
                <Button theme="dark">Dark</Button>
              </Grid>
              <Grid css={gridStyle} valign={'top'} align={'left'} size={32}>
                <Button theme="light">Light</Button>
              </Grid>
            </Grid>
          </Grid>
        </Blank>
        <Title>Text type</Title>
        <Blank border={'light'} rounded={5} shadow={3}>
          <Grid>
            <Grid flow={'row'} stretch={'full'} align={'center'} wrap>
              <Grid css={gridStyle} valign={'top'} align={'left'} size={32}>
                <Button type="text" theme="primary">Primary</Button>
              </Grid>
              <Grid css={gridStyle} valign={'top'} align={'left'} size={32}>
                <Button type="text" theme="yellow">Yellow</Button>
              </Grid>
              <Grid css={gridStyle} valign={'top'} align={'left'} size={32}>
                <Button type="text" theme="danger">Danger</Button>
              </Grid>
              <Grid css={gridStyle} valign={'top'} align={'left'} size={32}>
                <Button type="text" theme="warning">Warning</Button>
              </Grid>
              <Grid css={gridStyle} valign={'top'} align={'left'} size={32}>
                <Button type="text" theme="success">Success</Button>
              </Grid>
              <Grid css={gridStyle} valign={'top'} align={'left'} size={32}>
                <Button type="text" theme="info">Info</Button>
              </Grid>
              <Grid css={gridStyle} valign={'top'} align={'left'} size={32}>
                <Button type="text" theme="dark">Dark</Button>
              </Grid>
              <Grid css={gridStyle} valign={'top'} align={'left'} size={32}>
                <Button type="text" theme="light">Light</Button>
              </Grid>
            </Grid>
          </Grid>
        </Blank>
      </Card>

      <Card outline title={'input component'}>
        <Grid flow={'row'} stretch={'width'} wrap>
          <Grid size={4} padding={5}>
            <Input placeholder='First name' />
          </Grid>
          <Grid size={4} padding={5}>
            <Input placeholder='Last name' />
          </Grid>
          <Grid size={4} padding={5}>
            <Input placeholder='Country' value={'United States'} />
          </Grid>
          <Grid size={4} padding={5}>
            <Input valid placeholder='Email' value='test@test.ru' />
          </Grid>
          <Grid size={4} padding={5}>
            <Input error placeholder='Phone' value='+787267333' />
          </Grid>
          <Grid size={4} padding={5}>
            <Input error placeholder='Password' type={'password'} value='test@test' />
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

ReactDOM.render(<Sandbox/>, document.getElementById('root'));
