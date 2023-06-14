

export function validateIPAddress(ipAddress:string) {
    const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (ipv4Regex.test(ipAddress)) {
      const octets = ipAddress.split('.');
      for (let i = 0; i < octets.length; i++) {
        const octet = parseInt(octets[i], 10);
        if (octet < 0 || octet > 255) {
          return false;
        }
      }
      return true;
    }
  
    const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    if (ipv6Regex.test(ipAddress)) {
      return true;
    }
  
    return false;
  }