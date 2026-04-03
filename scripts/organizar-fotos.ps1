param(
  [string]$BasePath = ".\assets"
)

$targets = @("ana-laura", "luiza", "joao", "andrei", "para-todos")

foreach ($folder in $targets) {
  $dir = Join-Path $BasePath $folder

  if (-not (Test-Path $dir)) {
    Write-Host "[skip] pasta nao encontrada: $dir"
    continue
  }

  $files = Get-ChildItem -Path $dir -File |
    Where-Object { $_.Name -ne ".gitkeep" } |
    Sort-Object Name

  if ($files.Count -eq 0) {
    Write-Host "[ok] sem fotos para renomear em: $folder"
    continue
  }

  $tempList = @()
  $index = 1

  foreach ($file in $files) {
    $ext = $file.Extension.ToLower()
    $tempName = "__tmp__{0}__{1}{2}" -f ([guid]::NewGuid().ToString("N")), $index, $ext
    Rename-Item -LiteralPath $file.FullName -NewName $tempName
    $tempList += [pscustomobject]@{ TempName = $tempName; Ext = $ext }
    $index++
  }

  $finalIndex = 1
  foreach ($temp in $tempList) {
    $tempPath = Join-Path $dir $temp.TempName
    $finalName = "foto-$finalIndex$($temp.Ext)"
    Rename-Item -LiteralPath $tempPath -NewName $finalName
    $finalIndex++
  }

  Write-Host "[done] $folder ->" -NoNewline
  $renamed = Get-ChildItem -Path $dir -File |
    Where-Object { $_.Name -ne ".gitkeep" } |
    Sort-Object Name |
    Select-Object -ExpandProperty Name
  Write-Host " $($renamed -join ', ')"
}
