import React from 'react';
import { useSelector } from 'react-redux';
import { Menubar } from 'primereact/menubar';
import { downloadCSV } from '../utils/csv';

const Menu = () => {
   const things = useSelector(state => state.items);

   const items = [
      {
         label: 'Home',
         icon: 'pi pi-home'
      },
      {
         label: 'Features',
         icon: 'pi pi-star'
      },
      {
         label: 'Projects',
         icon: 'pi pi-search',
         items: [
            {
               label: 'Components',
               icon: 'pi pi-bolt'
            },
            {
               label: 'Blocks',
               icon: 'pi pi-server'
            },
            {
               label: 'UI Kit',
               icon: 'pi pi-pencil'
            },
            {
               label: 'Templates',
               icon: 'pi pi-palette',
               items: [
                  {
                     label: 'Apollo',
                     icon: 'pi pi-palette'
                  },
                  {
                     label: 'Ultima',
                     icon: 'pi pi-palette'
                  }
               ]
            }
         ]
      },
      {
         label: 'Contact',
         icon: 'pi pi-envelope'
      },
      {
         label: 'Export',
         icon: 'pi pi-external-link',
         items: [
            {
               label: 'CSV',
               icon: 'pi pi-file-o',
               command: () => {
                  downloadCSV(things);
               }
            },
            {
               label: 'PDF',
               icon: 'pi pi-file-pdf'
            }
         ]
      }
   ];

   return (
      <div
         className='card'
         style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            zIndex: '100'
         }}>
         <Menubar model={items} />
      </div>
   );
};

export default Menu;
