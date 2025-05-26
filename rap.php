$fp = fopen('lidn.txt', 'w');
fwrite($fp, 'Cats chase');
fwrite($fp, 'mice');
fclose($fp);
