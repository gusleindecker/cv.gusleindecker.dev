const EXPERIENCE_START_YEARS = {
  javascript: 2009,
  typescript: 2016,
} as const;

export function getExperienceIntroduction(
  year = Number(
    new Intl.DateTimeFormat("en", {
      year: "numeric",
      timeZone: "America/Sao_Paulo",
    }).format(new Date())
  )
) {
  const javascriptYears = year - EXPERIENCE_START_YEARS.javascript;
  const typescriptYears = year - EXPERIENCE_START_YEARS.typescript;

  return `Front-end Software Engineer with ${javascriptYears}+ years of experience building web applications with JavaScript and ${typescriptYears}+ years with TypeScript.`;
}
