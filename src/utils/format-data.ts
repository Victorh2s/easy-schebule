export function formatarDataBr(dataString: string) {
  const dataUtc = new Date(dataString);
  const dia = dataUtc.getUTCDate().toString().padStart(2, '0');
  const mes = (dataUtc.getUTCMonth() + 1).toString().padStart(2, '0');
  const ano = dataUtc.getUTCFullYear();

  const dataBr = `${dia}/${mes}/${ano}`;

  return dataBr;
}
