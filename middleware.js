export { default } from 'next-auth/middleware'

export const config = {matcher: ["/dashboard", "/dashboard/filterprofiles", "/dashboard/searchprofiles", "/dashboard/userprofile/[userID]" ]};