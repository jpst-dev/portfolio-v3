export async function fetchProjects() {
  const username = "jpst-dev";
  const res = await fetch(`https://api.github.com/users/${username}/repos`, {
    headers: {
      Accept: "application/vnd.github.mercy-preview+json",
    },
  });
  const repos = await res.json();

  return repos.filter((repo: any) =>
    repo.topics?.includes("portfolio-project")
  );
}
