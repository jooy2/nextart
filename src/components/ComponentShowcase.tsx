'use client';

import {
  Grid,
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
import { Language } from '@mui/icons-material';
import ButtonSet from '@/components/ButtonSets';

export default function ComponentShowcase({ menuItem }: { menuItem: any }) {
  return (
    <Grid container spacing={3}>
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
      <Grid size={6} className="mt-12.5">
        <ButtonSet />
      </Grid>
      <Grid size={6}  className="mt-12.5">
        <Paper>
          <List>
            {menuItem.map((item) => (
              <Link href={item.href} key={item.href} className="text-black no-underline">
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
    </Grid>
  );
}
