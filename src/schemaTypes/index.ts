import {childType} from './childType'
import {elfType} from './elfType'
import {eventType} from './eventType'
import {giftType} from './giftType'
import {materialType} from './materialType'
import {pageType} from './pageType'
import {parentType} from './parentType'
import {personType} from './personType'
import {postType} from './postType'
import {reindeerType} from './reindeerType'
import {sleighType} from './sleighType'
import {supplierType} from './supplierType'
import {toyType} from './toyType'
import {warehouseType} from './warehouseType'

export const schemaTypes = [
  // CRM types
  childType,
  parentType,

  // HR types
  elfType,
  reindeerType,
  sleighType,
  giftType,

  // Inventory types
  materialType,
  supplierType,
  toyType,
  warehouseType,

  // CMS types
  pageType,
  personType,
  postType,
  eventType,
]
