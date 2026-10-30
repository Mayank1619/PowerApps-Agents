$ErrorActionPreference = 'Stop'

$pac = Get-Command 'pac' -ErrorAction SilentlyContinue
$az = Get-Command 'az' -ErrorAction SilentlyContinue

if ($pac) {
    Write-Output "PASS: PAC CLI command found at $($pac.Source)."
} else {
    Write-Output 'FAIL: PAC CLI command not found.'
}

if ($az) {
    Write-Output "PASS: Azure CLI command found at $($az.Source)."
} else {
    Write-Output 'INFO: Azure CLI command not found; no authentication state was queried.'
}

Write-Output 'INFO: This checker does not authenticate, enumerate profiles/environments, display tokens, or modify configuration.'
if (-not $pac) {
    exit 1
}