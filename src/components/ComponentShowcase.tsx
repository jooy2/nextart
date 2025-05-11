'use client';

import { css } from '@mui/material-pigment-css';
import {
  Grid2 as Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Tooltip,
} from '@mui/material';
import Link from 'next/link';
import { cssRemoveLinkStyle } from '@/styles/commonStyles';
import { Language } from '@mui/icons-material';
import ButtonSet from '@/components/ButtonSets';

export default function ComponentShowcase({ menuItem }: { menuItem: any }) {
  return (
    <>
      <Grid size={12}>
        <Tooltip title="Test" placement="bottom">
          <IconButton onClick={() => null}>
            <Language />
          </IconButton>
        </Tooltip>
        <Tooltip title="Test" placement="bottom">
          <IconButton onClick={() => null}>
            <Language />
          </IconButton>
        </Tooltip>
        <Tooltip title="Test" placement="bottom">
          <IconButton onClick={() => null}>
            <Language />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid size={6} className={css({ marginTop: '50px' })}>
        <ButtonSet />
      </Grid>
      <Grid size={6} className={css({ marginTop: '50px' })}>
        <Paper>
          <List>
            {menuItem.map((item) => (
              <Link href={item.href} key={item.href} className={cssRemoveLinkStyle}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Paper>
      </Grid>
    </>
  );
}
