$repo = 'Anele-e/anele.github.io'
$api = "https://api.github.com/repos/$repo/actions/runs?per_page=5"
for ($i = 1; $i -le 12; $i++) {
    try {
        $r = Invoke-RestMethod -Uri $api -UseBasicParsing -Headers @{ 'User-Agent' = 'CI' }
    } catch {
        Write-Output "ERROR: $($_.Exception.Message)"
        break
    }
    if ($r.total_count -gt 0) {
        $run = $r.workflow_runs[0]
        $s = $run.status
        $c = $run.conclusion
        $u = $run.html_url
        $n = $run.name
        $t = $run.created_at
        Write-Output ("RUN {0}: name={1} status={2} conclusion={3} created={4} url={5}" -f $i, $n, $s, $c, $t, $u)
        if ($s -eq 'completed') { exit 0 }
    } else {
        Write-Output ("RUN {0}: no_runs" -f $i)
    }
    Start-Sleep -Seconds 10
}
exit 2
