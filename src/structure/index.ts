import {contextDocumentTypeName} from '@sanity/assist'
import {Baby, Check, X} from 'lucide-react'
import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('North Pole')
    .items([
      // CMS types
      S.documentTypeListItem('page').title('Pages'),
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('event').title('Events'),
      S.documentTypeListItem('person').title('People'),
      S.divider(),

      // CRM types
      // S.documentTypeListItem('child').title('Children'),
      S.listItem()
        .title('Children')
        .icon(Baby)
        .child(
          S.list()
            .title('Children')
            .items([
              S.documentTypeListItem('child').title('All Children'),
              S.divider(),
              S.listItem()
                .title(`Nice Children`)
                .icon(Check)
                .child(
                  S.documentList()
                    .apiVersion('2024-10-01')
                    .title(`Nice Children`)
                    .schemaType('child')
                    .filter('_type == "child" && status == "nice"'),
                ),
              S.listItem()
                .title(`Naughty Children`)
                .icon(X)
                .child(
                  S.documentList()
                    .apiVersion('2024-10-01')
                    .title(`Naughty Children`)
                    .schemaType('child')
                    .filter('_type == "child" && status == "naughty"'),
                ),
            ]),
        ),
      S.documentTypeListItem('parent').title('Parents'),
      S.divider(),

      // HR types
      S.documentTypeListItem('elf').title('Elves'),
      S.documentTypeListItem('reindeer').title('Reindeer'),
      S.documentTypeListItem('sleigh').title('Sleighs'),
      S.documentTypeListItem('gift').title('Gifts'),
      S.divider(),

      // Inventory types
      S.documentTypeListItem('material').title('Materials'),
      S.documentTypeListItem('supplier').title('Suppliers'),
      S.documentTypeListItem('toy').title('Toys'),
      S.documentTypeListItem('warehouse').title('Warehouses'),
      S.divider(),

      // Built-in types
      S.documentTypeListItem(contextDocumentTypeName),
    ])
