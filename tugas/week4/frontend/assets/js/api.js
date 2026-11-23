/**
 * Terratech Hub - API Client untuk Enclosures (NestJS Backend)
 * Base URL: http://localhost:3000/enclosures
 */

const API_BASE_URL = 'http://localhost:3000/enclosures';

/**
 * Helper pembungkus fetch dengan penanganan error terpusat
 */
async function requestJson(url, options = {}) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  };

  let response;
  try {
    response = await fetch(url, config);
  } catch (networkErr) {
    throw new Error(
      'Gagal terhubung ke server backend (http://localhost:3000). Pastikan server NestJS sedang berjalan.'
    );
  }

  let payload = null;
  const contentType = response.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    payload = await response.json();
  }

  if (!response.ok) {
    const rawMsg = payload && payload.message ? payload.message : response.statusText;
    const msg = Array.isArray(rawMsg) ? rawMsg.join('; ') : rawMsg;
    throw new Error(msg || `Request gagal dengan status ${response.status}`);
  }

  return payload;
}

/**
 * Mengambil seluruh daftar enclosure (GET /enclosures)
 */
async function getAll() {
  return requestJson(API_BASE_URL, { method: 'GET' });
}

/**
 * Mengambil satu data enclosure berdasarkan ID (GET /enclosures/:id)
 */
async function getOne(id) {
  return requestJson(`${API_BASE_URL}/${encodeURIComponent(id)}`, { method: 'GET' });
}

/**
 * Membuat enclosure baru (POST /enclosures)
 */
async function create(data) {
  return requestJson(API_BASE_URL, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * Mengubah data enclosure berdasarkan ID (PATCH /enclosures/:id)
 */
async function update(id, data) {
  return requestJson(`${API_BASE_URL}/${encodeURIComponent(id)}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

/**
 * Menghapus enclosure berdasarkan ID (DELETE /enclosures/:id)
 */
async function remove(id) {
  return requestJson(`${API_BASE_URL}/${encodeURIComponent(id)}`, {
    method: 'DELETE',
  });
}

// Ekspos ke global window agar mudah dipanggil dari script halaman
window.EnclosureAPI = {
  getAll,
  getOne,
  create,
  update,
  remove,
};
