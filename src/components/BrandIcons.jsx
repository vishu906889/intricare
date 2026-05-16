import React from 'react'

export const LinkedinIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export const AudienceIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.25 4.5H15.75" stroke="#3666EE" stroke-width="1.125" stroke-linecap="round" />
    <path d="M8.25 9H15.75" stroke="#3666EE" stroke-width="1.125" stroke-linecap="round" />
    <path d="M8.25 13.5H15.75" stroke="#3666EE" stroke-width="1.125" stroke-linecap="round" />
    <path d="M2.25 5.54464C2.25 5.54464 3 6.03349 3.375 6.75C3.375 6.75 4.5 3.9375 6 3" stroke="#3666EE" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M2.25 13.7947C2.25 13.7947 3 14.2835 3.375 15C3.375 15 4.5 12.1875 6 11.25" stroke="#3666EE" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)

export const AiIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.25 12V10.5C14.25 8.3787 14.25 7.31802 13.591 6.65901C12.9319 6 11.8713 6 9.75 6H8.25C6.12868 6 5.06802 6 4.40901 6.65901C3.75 7.31802 3.75 8.3787 3.75 10.5V12C3.75 14.1213 3.75 15.1819 4.40901 15.841C5.06802 16.5 6.12868 16.5 8.25 16.5H9.75C11.8713 16.5 12.9319 16.5 13.591 15.841C14.25 15.1819 14.25 14.1213 14.25 12Z" stroke="white" stroke-width="1.125" stroke-linejoin="round" />
    <path d="M14.25 13.5C15.3106 13.5 15.841 13.5 16.1705 13.1705C16.5 12.841 16.5 12.3106 16.5 11.25C16.5 10.1894 16.5 9.65902 16.1705 9.32947C15.841 9 15.3106 9 14.25 9" stroke="white" stroke-width="1.125" stroke-linejoin="round" />
    <path d="M3.75 13.5C2.68934 13.5 2.15901 13.5 1.82951 13.1705C1.5 12.841 1.5 12.3106 1.5 11.25C1.5 10.1894 1.5 9.65902 1.82951 9.32947C2.15901 9 2.68934 9 3.75 9" stroke="white" stroke-width="1.125" stroke-linejoin="round" />
    <path d="M10.125 2.625C10.125 3.24632 9.6213 3.75 9 3.75C8.3787 3.75 7.875 3.24632 7.875 2.625C7.875 2.00368 8.3787 1.5 9 1.5C9.6213 1.5 10.125 2.00368 10.125 2.625Z" stroke="white" stroke-width="1.125" />
    <path d="M9 3.75V6" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M6.75 9.75V10.5" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M11.25 9.75V10.5" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M7.5 13.125C7.5 13.125 8.00003 13.5 9 13.5C9.99997 13.5 10.5 13.125 10.5 13.125" stroke="white" stroke-width="1.125" stroke-linecap="round" />
  </svg>

)

export const MassegeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.375 10.875H11.625M6.375 7.125H9" stroke="#3666EE" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M10.6279 15.6679C13.7652 15.4594 16.2642 12.9249 16.4698 9.74318C16.51 9.12053 16.51 8.47568 16.4698 7.85303C16.2642 4.67129 13.7652 2.13685 10.6279 1.9283C9.55762 1.85716 8.4402 1.85731 7.37205 1.9283C4.23479 2.13685 1.73581 4.67129 1.53018 7.85303C1.48994 8.47568 1.48994 9.12053 1.53018 9.74318C1.60507 10.902 2.11757 11.975 2.72093 12.881C3.07126 13.5152 2.84005 14.3069 2.47516 14.9984C2.21206 15.497 2.08051 15.7462 2.18613 15.9263C2.29176 16.1064 2.52769 16.1122 2.99957 16.1236C3.93275 16.1464 4.56201 15.8818 5.06151 15.5135C5.3448 15.3046 5.48645 15.2001 5.58408 15.1881C5.6817 15.1761 5.87383 15.2552 6.25801 15.4135C6.6033 15.5557 7.00422 15.6434 7.37205 15.6679C8.4402 15.7389 9.55762 15.739 10.6279 15.6679Z" stroke="#3666EE" stroke-width="1.125" stroke-linejoin="round" />
  </svg>
)

export const ExportIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.75 6.375H10.125V3.52226C10.125 3.23382 10.3588 3 10.6472 3C10.7925 3 10.9312 3.06046 11.03 3.16689L15.4948 7.9752C15.6589 8.15183 15.75 8.38395 15.75 8.625C15.75 8.86605 15.6589 9.09817 15.4948 9.2748L11.03 14.0831C10.9312 14.1896 10.7925 14.25 10.6472 14.25C10.3588 14.25 10.125 14.0161 10.125 13.7278V10.875C5.95916 10.875 3.71016 13.8872 3.14399 14.7635C3.05053 14.9082 2.89285 15 2.72063 15C2.46071 15 2.25 14.7893 2.25 14.5294V13.875C2.25 9.7329 5.60786 6.375 9.75 6.375Z" stroke="#3666EE" stroke-width="1.125" stroke-linejoin="round" />
  </svg>

)


export const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.10431 2.625H9.38565C11.1979 2.625 12.667 4.09411 12.667 5.90634C12.667 7.71859 11.1979 9.18768 9.38565 9.18768H1" stroke="#3666EE" stroke-width="1.09378" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M3.18755 7C3.18755 7 1.00001 8.61114 1 9.18756C0.999993 9.76406 3.18756 11.3751 3.18756 11.3751" stroke="#3666EE" stroke-width="1.09378" stroke-linecap="round" stroke-linejoin="round" />
  </svg>


)

export const CompaignIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 13.5C15.1569 13.5 16.5 10.8137 16.5 7.5C16.5 4.18629 15.1569 1.5 13.5 1.5C11.8431 1.5 10.5 4.18629 10.5 7.5C10.5 10.8137 11.8431 13.5 13.5 13.5Z" stroke="#F6F6F6" stroke-width="1.125" />
    <path d="M13.5 1.5C11.1727 1.5 6.34884 3.28321 3.57829 4.39029C2.30956 4.89726 1.5 6.13374 1.5 7.5C1.5 8.86627 2.30956 10.1027 3.57829 10.6097C6.34884 11.7168 11.1727 13.5 13.5 13.5" stroke="#F6F6F6" stroke-width="1.125" />
    <path d="M8.25 16.5L6.79255 15.6977C5.20573 14.8243 4.3099 13.06 4.5341 11.25" stroke="#F6F6F6" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

)

export const ExportbuttonIcon = () => (
  <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.9039 5.96018C13.9102 5.96015 13.9166 5.96014 13.923 5.96014C16.0352 5.96014 17.7474 7.67551 17.7474 9.7916C17.7474 11.7637 16.2601 13.3878 14.3479 13.5996M13.9039 5.96018C13.9165 5.81995 13.923 5.67794 13.923 5.53442C13.923 2.94815 11.8303 0.851562 9.2487 0.851562C6.80383 0.851562 4.79736 2.73204 4.59177 5.12804M13.9039 5.96018C13.817 6.92609 13.4374 7.80741 12.8545 8.51442M7.54938 5.96014C6.8391 5.42551 5.95615 5.10871 4.99935 5.10871C4.86187 5.10871 4.72591 5.11525 4.59177 5.12804C2.43613 5.33355 0.75 7.15241 0.75 9.36581C0.75 11.4254 2.20987 13.1434 4.14948 13.5378" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M9.24577 16.1486V9.34961M9.24577 16.1486C8.65069 16.1486 7.53883 14.4537 7.12109 14.0239M9.24577 16.1486C9.84085 16.1486 10.9527 14.4537 11.3704 14.0239" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)

export const CsvIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#3666EE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M14 2V8H20" stroke="#3666EE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 18V12" stroke="#3666EE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M9 15L12 12L15 15" stroke="#3666EE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)

export const WebhookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="#3666EE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="#3666EE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)

export const LinkedinnewIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.25 7.5V12.75" stroke="#3666EE" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8.25 9.75V12.75M8.25 9.75C8.25 8.50732 9.25732 7.5 10.5 7.5C11.7427 7.5 12.75 8.50732 12.75 9.75V12.75M8.25 9.75V7.5" stroke="#3666EE" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5.25577 5.25H5.24902" stroke="#3666EE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M1.875 9C1.875 5.64124 1.875 3.96187 2.91843 2.91843C3.96187 1.875 5.64124 1.875 9 1.875C12.3587 1.875 14.0381 1.875 15.0816 2.91843C16.125 3.96187 16.125 5.64124 16.125 9C16.125 12.3587 16.125 14.0381 15.0816 15.0816C14.0381 16.125 12.3587 16.125 9 16.125C5.64124 16.125 3.96187 16.125 2.91843 15.0816C1.875 14.0381 1.875 12.3587 1.875 9Z" stroke="#3666EE" stroke-width="1.125" stroke-linejoin="round" />
  </svg>

)
export const CalenderIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1.5V4.5M6 1.5V4.5" stroke="#334155" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M9.75 3H8.25C5.42157 3 4.00736 3 3.12868 3.87868C2.25 4.75736 2.25 6.17157 2.25 9V10.5C2.25 13.3284 2.25 14.7427 3.12868 15.6213C4.00736 16.5 5.42157 16.5 8.25 16.5H9.75C12.5784 16.5 13.9927 16.5 14.8713 15.6213C15.75 14.7427 15.75 13.3284 15.75 10.5V9C15.75 6.17157 15.75 4.75736 14.8713 3.87868C13.9927 3 12.5784 3 9.75 3Z" stroke="#334155" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M2.25 7.5H15.75" stroke="#334155" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)

export const AudianceIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5 6.375C10.5 4.30393 8.82105 2.625 6.75 2.625C4.67893 2.625 3 4.30393 3 6.375C3 8.44605 4.67893 10.125 6.75 10.125C8.82105 10.125 10.5 8.44605 10.5 6.375Z" stroke="#3666EE" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 15.375C12 12.4755 9.6495 10.125 6.75 10.125C3.85051 10.125 1.5 12.4755 1.5 15.375" stroke="#3666EE" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12.75 7.5H16.5" stroke="#3666EE" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12.75 9.75H16.5" stroke="#3666EE" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M15 12H16.5" stroke="#3666EE" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

)