// script.js - shared client functions
const API_BASE = (window.API_BASE || '').trim() || 'http://localhost:4000/api';

async function postRideApi(payload){
  return fetch(`${API_BASE}/rides`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(payload)
  });
}

async function getRidesApi(pickup = '', dest = ''){
  const qp = new URLSearchParams();
  if (pickup) qp.set('pickup', pickup);
  if (dest) qp.set('dest', dest);
  const res = await fetch(`${API_BASE}/rides?${qp.toString()}`);
  return res.json();
}

async function postBookingApi(payload){
  return fetch(`${API_BASE}/bookings`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(payload)
  });
}

async function getBookingsApi(){
  const res = await fetch(`${API_BASE}/bookings`);
  return res.json();
}

function showToast(msg){
  // simple toast: can be replaced with better UI
  alert(msg);
}

function escapeHtml(s){ return String(s||'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;'); }
